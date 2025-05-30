"use client";
import Carousel from "../carousel";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { useState, useRef } from "react";
import { handleApiRequest } from "@/axios/axiosClient";
import { registerUnloadGuard, unregisterUnloadGuard } from "@/utilities/saveMonitor";
import { deleteValue_Affirmations } from "@/redux/features/values_affirmations/values_AffThunk";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FiTrash2 } from "react-icons/fi";

interface read_AffirmationType {
  _id: string;
  userId: string;
  valueId: string;
  valueName: string;
  affirmation: string;
}

interface create_AffirmationType {
  userId: string;
  valueId: string;
  valueName: string;
  affirmation: string;
}

interface ValueCardProps {
  userId: string;
  valueId: string;
  valueName: string;
  affirmations: read_AffirmationType[];
}

interface Value_AffirmationType {
  valueId: string;
  valueName: string;
  affirmations: read_AffirmationType[];
  userId: string;
  generateWithAi: boolean;
  storeAiAffirmations: boolean;
  activateNotification: boolean;
  intervalName: string;
  intervalValue: string;
  readAffirmation: boolean;
}

interface EditableValueType {
  generateWithAi: boolean;
  storeAiAffirmations: boolean;
  activateNotification: boolean;
  intervalName: string;
  intervalValue: string;
  readAffirmation: boolean;
}
const ValueCard = ({ userId, valueId, valueName, affirmations }: ValueCardProps) => {
  const dispatch = useAppDispatch();
  const { values_Affirmations, isLoading: valuesIsLoading } = useAppSelector((state) => state.values_Affirmations);
  const [tempAffirmations, setTempAffirmations] = useState<create_AffirmationType[]>([]);
  const affirmationsList = affirmations.map((item) => item.affirmation);
  const switchTextComboStyle = "flex gap-3 justify-between";
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [valueInputs, setValueInputs] = useState<EditableValueType>({
    generateWithAi: false,
    storeAiAffirmations: false,
    activateNotification: false,
    intervalName: "",
    intervalValue: "",
    readAffirmation: false
  });
  const [affirmationTextArea, setAffirmationTextArea] = useState("");

  const [valueTimer, setvalueTimer] = useState<NodeJS.Timeout | null>(null);
  const [affirmationsTimer, setAffirmationsTimer] = useState<NodeJS.Timeout | null>(null);
  const [saveStatus, setSaveStatus] = useState("No edits yet...");
  const valueSaveVersion = useRef(0);
  const affirmationsSaveVersion = useRef(0);

  const { generateWithAi, storeAiAffirmations, activateNotification, intervalName, intervalValue, readAffirmation } =
    valueInputs;

  interface HandleCardChangeEvent {
    target: {
      name: string;
      value: any;
      checked: boolean;
      type: string;
    };
  }

  const handleDeleteValue_Affirmation = () => {
    dispatch(deleteValue_Affirmations({ valueId }));
  };
  const handleSaveToBackend = async (
    saveId: number,
    data: EditableValueType | create_AffirmationType[],
    dataType: string
  ) => {
    setSaveStatus("Saving...");
    if (dataType === "value") {
      try {
        const valuesDataToSend = {
          ...data,
          valueId
        };

        const valueDataResponse = await handleApiRequest("post", "", valuesDataToSend);

        if (saveId === valueSaveVersion.current && valueDataResponse) {
          setSaveStatus("Saved");
          unregisterUnloadGuard(saveId);
        }
      } catch (err: any) {
        setSaveStatus("Error Saving Value Data...");
      }
    } else if (dataType === "affirmations") {
      try {
        if (Array.isArray(data) && data.length > 0) {
          const affirmationResponse = await handleApiRequest(
            "post",
            "http://localhost:5000/api/valuesAffirmations/createAffirmations",
            data
          );

          if (saveId === affirmationsSaveVersion.current && affirmationResponse) {
            setSaveStatus("Saved");
            unregisterUnloadGuard(saveId);
          }
        }
      } catch (err: any) {
        setSaveStatus("Error Saving Affirmations...");
      }
    }
  };

  const handleCardChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | HandleCardChangeEvent
  ): void => {
    setSaveStatus("Unsaved");
    let name: string, value: any, checked: boolean, type: string;

    if ("target" in e) {
      name = e.target.name;
      value = e.target.value;
      checked = (e.target as HTMLInputElement).checked;
      type = e.target.type;
    } else {
      // fallback for custom event shape
      name = (e as HandleCardChangeEvent).target.name;
      value = (e as HandleCardChangeEvent).target.value;
      checked = (e as HandleCardChangeEvent).target.checked;
      type = (e as HandleCardChangeEvent).target.type;
    }

    const newValueInputs = {
      ...valueInputs,
      [name]: type === "checkbox" ? checked : value
    };
    setValueInputs(newValueInputs);

    if (valueTimer) clearTimeout(valueTimer);

    const newValueTimer = setTimeout(() => {
      const saveId = ++valueSaveVersion.current;
      registerUnloadGuard(saveId);
      handleSaveToBackend(saveId, newValueInputs, "value");
    }, 3000);
    setvalueTimer(newValueTimer);
  };

  const handleAffirmationChange = () => {
    setSaveStatus("Unsaved Changes. Scheduling Saving...");

    const affirmationToAdd: create_AffirmationType = {
      userId: userId,
      valueId: valueId,
      valueName: valueName,
      affirmation: affirmationTextArea
    };

    const updatedAffirmations = [...tempAffirmations, affirmationToAdd];

    setTempAffirmations(updatedAffirmations);

    if (affirmationsTimer) clearTimeout(affirmationsTimer);
    const saveId = ++affirmationsSaveVersion.current;
    registerUnloadGuard(saveId);
    const newAffirmationsTimer = setTimeout(() => {
      handleSaveToBackend(saveId, updatedAffirmations, "affirmations");
    }, 5000);
    setAffirmationsTimer(newAffirmationsTimer);
    setAffirmationTextArea("");
  };

  const notitificationDialog = (
    <div className=" flex bg-themeText-5 rounded-md absolute inset-0 justify-center items-center z-20 text-themeBackground">
      <div className="bg-white border border-themeBackground-10 rounded-md p-4 w-[80%] max-h-[80%] flex flex-col gap-5">
        <h1 className="text-[20px] font-bold">Notification Interval</h1>

        <select
          name="notificationInterval"
          value={intervalName}
          onChange={handleCardChange}
          className="border-themeBackground-20 border outline-none focus:border-2 rounded-md p-2 w-full"
        >
          <option value="" disabled>
            Select Interval
          </option>
          <option value="Monthly">Monthly</option>
          <option value="Weekly">Weekly</option>
          <option value="Daily">Daily</option>
          <option value="Hourly">Hourly</option>
        </select>

        <div>
          {/* if monthly, date, if weekly day, if daily time, if hourly interval */}
          <h1 className="font-semibold text-themeBackground-60">
            {intervalName === "Monthly"
              ? "Enter Date - Format: (dd) 15"
              : intervalName === "Weekly"
              ? "Enter Day - Format: (dddd) Tuesday"
              : intervalName === "Daily"
              ? "Enter Time - Format: (HH:mm) 15:30"
              : intervalName === "Hourly"
              ? "Enter interval - Format: (#) 2"
              : ""}
          </h1>
          <input
            type="text"
            name="intervalData"
            value={intervalValue}
            onChange={handleCardChange}
            className="bg-white w-full p-2 rounded-md border border-themeBackground-20 outline-none focus:border-2"
          />
        </div>
        <div className="flex justify-center">
          <Button
            className="bg-themeBackground text-themeText hover:bg-themeBackground-80 "
            onClick={() => setOpenNotificationDialog(false)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col gap-10 w-[400px] font-semibold h-[570px] bg-themeText-5 border border-themeText-20 rounded-xl shadow-md p-8 text-[15px] items-center justify-center">
      {openNotificationDialog && notitificationDialog}
      <div className="flex justify-between w-full">
        <div className="text-[13px] animate-pulse w-full">{saveStatus}</div>
        <FiTrash2 className="size-6 hover:text-gray-500" onClick={handleDeleteValue_Affirmation} />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-[20px] font-extrabold">{valueName}</h1>
          <p className="flex gap-3 font-bold text-themeText-50">{affirmationsList.length} Affirmation(s)</p>
        </div>
        <div className="h-[50px] overflow-hidden">
          {affirmationsList.length > 0 ? (
            <Carousel styling="font-bold" texts={affirmationsList} duration={4000} />
          ) : tempAffirmations.length > 0 ? (
            <p className="text-themeText-50 animate-pulse">Please refresh the page to see latest affirmations</p>
          ) : (
            <p className="text-themeText-50">
              No affirmations available. Use the section below to start adding.No affirmations available. Use the
              section below to start addingNo affirmations available. Use the section below to start adding
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* switches div */}
        <div className="flex gap-5 justify-between">
          <div className={switchTextComboStyle}>
            <span>Generate with AI</span>
            <Switch
              name={"generateWithAi"}
              checked={generateWithAi}
              onCheckedChange={(newVal) => {
                handleCardChange({
                  target: {
                    name: "generateWithAi",
                    type: "checkbox",
                    checked: newVal,
                    value: newVal
                  }
                });
              }}
            />
          </div>
          <div className={switchTextComboStyle}>
            <span>Store AI Affirmations</span>
            <Switch
              name={"storeAiAffirmations"}
              checked={storeAiAffirmations}
              onCheckedChange={(newVal) => {
                handleCardChange({
                  target: {
                    name: "storeAiAffirmations",
                    type: "checkbox",
                    checked: newVal,
                    value: newVal
                  }
                });
              }}
            />
          </div>
        </div>
        {/* custom affirmation div */}
        <div className="flex gap-5 justify-between items-center">
          <textarea
            name={"affirmationTextArea"}
            value={affirmationTextArea}
            onChange={(e) => {
              setAffirmationTextArea(e.target.value);
            }}
            className="outline-none focus:border border-themeText-20 bg-themeText-10  rounded-md w-full max-h-[100px] min-h-[100px] p-2"
          />
          <Button onClick={handleAffirmationChange}>Add</Button>
        </div>
        {affirmationTextArea && (
          <div className="text-[13px] italic">Remember to add each affirmation using the button</div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        {/* notification and tone div */}
        <div className="grid grid-cols-2 gap-5 items-center">
          {/* buttons div */}
          <div className="flex flex-col gap-3">
            <Button onClick={() => setOpenNotificationDialog(true)}>Set Notification</Button>
            {/* <Button>Set Language/Tone</Button> */}
          </div>
          {/* switches */}
          <div className="flex flex-col gap-5">
            <div className={switchTextComboStyle}>
              <span>Notification</span>
              <Switch
                name={"activateNotification"}
                checked={activateNotification}
                onCheckedChange={(newVal) => {
                  handleCardChange({
                    target: {
                      name: "activateNotification",
                      type: "checkbox",
                      checked: newVal,
                      value: newVal
                    }
                  });
                }}
              />
            </div>
            <div className={switchTextComboStyle}>
              <span>Read Affirmation</span>
              <Switch
                name={"readAffirmation"}
                checked={readAffirmation}
                onCheckedChange={(newVal) => {
                  handleCardChange({
                    target: {
                      name: "readAffirmation",
                      type: "checkbox",
                      checked: newVal,
                      value: newVal
                    }
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* themes div */}
    </div>
  );
};

export default ValueCard;
