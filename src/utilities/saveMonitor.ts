const unloadGuards = new Set<number>();

const updateUnloadListener = () => {
  if (unloadGuards.size > 0) {
    window.onbeforeunload = () => "You have unsaved changes!";
  } else {
    window.onbeforeunload = null;
  }
};

export const registerUnloadGuard = (id: number) => {
  unloadGuards.add(id);
  updateUnloadListener();
};

export const unregisterUnloadGuard = (id: number) => {
  unloadGuards.delete(id);
  updateUnloadListener();
};
