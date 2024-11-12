// dark-mode-library.js

class DarkModeLibrary {
  constructor(options = {}) {
    this.options = {
      colors: options.colors || { background: "#121212", text: "#ffffff" },
      transitionDuration: options.transitionDuration || "0.5s",
      transitionType: options.transitionType || "ease",
      ...options,
    };
    this.init();
  }

  init() {
    this.createToggleButton(); // التأكد من إنشاء الزر أولاً
    this.applyInitialMode();
  }

  applyInitialMode() {
    const currentMode = localStorage.getItem("darkMode") || "light";
    document.documentElement.setAttribute("data-mode", currentMode);
    this.applyColors();
  }

  applyColors() {
    const mode = document.documentElement.getAttribute("data-mode");
    const colors =
      mode === "dark"
        ? this.options.colors
        : { background: "#ffffff", text: "#000000" };
    document.documentElement.style.setProperty(
      "--background-color",
      colors.background
    );
    document.documentElement.style.setProperty("--text-color", colors.text);
    document.documentElement.style.transition = `${this.options.transitionDuration} ${this.options.transitionType}`;

    // تحديث الأيقونة على حسب الوضع
    this.updateToggleIcon();
  }

  toggleMode() {
    const currentMode =
      document.documentElement.getAttribute("data-mode") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-mode", currentMode);
    localStorage.setItem("darkMode", currentMode);
    this.applyColors();
  }

  createToggleButton() {
    this.button = document.createElement("button");
    this.button.className = "dark-mode-toggle";
    this.button.onclick = () => this.toggleMode();

    // إضافة الأيقونة بعد إضافة الزر
    this.updateToggleIcon();

    document.body.appendChild(this.button);
  }

  updateToggleIcon() {
    const mode = document.documentElement.getAttribute("data-mode");

    // التأكد من أن الزر تم إنشاؤه
    if (!this.button) return;

    // تنظيف محتوى الزر قبل التحديث
    this.button.innerHTML = "";

    // إضافة أيقونة الشمس أو القمر بناءً على الوضع
    const icon = document.createElement("span");
    icon.innerHTML = mode === "dark" ? "☀️" : "🌙"; // يمكنك استبدالها بصور مخصصة إذا لزم الأمر
    this.button.appendChild(icon);
  }
}

export default DarkModeLibrary;
