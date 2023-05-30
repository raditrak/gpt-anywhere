import { appWindow, LogicalSize } from "@tauri-apps/api/window";

export const anchorLink = (url: string, newTab: boolean) => {
  const link = document.createElement("a");
  link.href = url;
  link.style.display = "none";
  if (newTab) {
    link.target = "_blank";
  }
  document.body.appendChild(link);
  link.click();
};

export const checkCookie = (cookieName: string) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${cookieName}=`)) {
      console.log(`${cookieName} cookie found!`);
      return true;
    }
  }

  console.log(`${cookieName} cookie not found!`);
  return false;
};

export const setWindowSize = (w: number, h: number) => {
  appWindow.setSize(new LogicalSize(w, h));
  appWindow.setMaxSize(new LogicalSize(w + 200, h + 200));
  appWindow.setMinSize(new LogicalSize(w - 200, h - 200));
};
