import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();
const orders = getOrders();

document.addEventListener("click", (event) => {
  const itemClicked = event.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");
    const foundEmployee = employees.find(
      ({ id }) => id === parseInt(employeeId)
    );
    //take employeeid, i'm going to use it to iterate over orders and calculate the amount of orders
    const employeeOrderCount = orders.filter((obj) => {
      if (obj.employeeId === parseInt(employeeId)) {
        return true;
      }
    }).length;

    window.alert(`${foundEmployee.name} has sold ${employeeOrderCount} items`);
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
