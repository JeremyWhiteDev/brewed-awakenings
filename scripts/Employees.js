import { getEmployees } from "./database.js";

const employees = getEmployees();

document.addEventListener("click", (event) => {
  const itemClicked = event.target;
  if (event.target.id.startsWith("employee")) {
    window.alert(`employee`);
  }
});

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
