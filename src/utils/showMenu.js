const handleMenu = require("./handleMenu.js");

const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  brightGreen: "\x1b[92m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const menuOptions = [
  { key: "1", label: "Display all farmer deliveries" },
  { key: "2", label: "Search for a farmer" },
  { key: "3", label: "Calculate farmer payments" },
  { key: "4", label: "Display pending payments" },
  { key: "5", label: "Update payment status" },
  { key: "6", label: "Display large deliveries" },
  { key: "7", label: "Generate daily report" },
  { key: "8", label: "Save updated records to database" },
  { key: "9", label: "Exit" },
];

function centerText(text, width) {
  const padding = Math.max(0, width - text.length);
  const left = Math.floor(padding / 2);
  const right = padding - left;
  return " ".repeat(left) + text + " ".repeat(right);
}

function showMenu(rl) {
  const width = 50;
  const border = "═".repeat(width);
  const { reset, bold, brightGreen, yellow, cyan, gray } = colors;

  console.clear();
  console.log(`${brightGreen}╔${border}╗${reset}`);
  console.log(
    `${brightGreen}║${reset}${bold}${centerText("🧑‍🌾 NYERI GREEN FARMERS COOPERATIVE 🧑‍🌾", width)}${reset}${brightGreen}║${reset}`
  );
  console.log(
    `${brightGreen}║${reset}${centerText("Farmers Produce Management System", width)}${brightGreen}║${reset}`
  );
  console.log(`${brightGreen}╠${border}╣${reset}`);

  for (const option of menuOptions) {
    const isExit = option.key === "9";
    const numColor = isExit ? gray : cyan;
    const label = isExit ? `${gray}${option.label}${reset}` : option.label;
    const visibleLength = `  ${option.key}. ${option.label}`.length;
    const pad = " ".repeat(Math.max(0, width - visibleLength));
    console.log(
      `${brightGreen}║${reset}  ${numColor}${option.key}.${reset} ${label}${pad}${brightGreen}║${reset}`
    );
  }

  console.log(`${brightGreen}╚${border}╝${reset}`);

  if (rl) {
      rl.question( `\n${yellow}➤ Enter your choice (1-9): ${reset}`, (choice) => handleMenu(choice, rl, showMenu) );
  }
}

module.exports = showMenu;