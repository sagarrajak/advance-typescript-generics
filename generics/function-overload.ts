interface CustomerPermissions {
  actions: string[];
}

interface EmployeePermissions extends CustomerPermissions {
  tasks: string[];
}

interface ManagerPermissions extends EmployeePermissions {
  approvals: string[];
}

function getPermissions(role: "manager"): ManagerPermissions;
function getPermissions(role: "employee"): EmployeePermissions;
function getPermissions(
  role: string | Omit<string, "manager" | "employee">
): CustomerPermissions;

function getPermissions(
  role: string | Omit<string, "manager" | "employee">
) {
  switch (role) {
    case "manager":
      return {
        approvals: [],
        tasks: [],
        actions: [],
      } as ManagerPermissions;
    case "employee":
      return {
        tasks: [],
        actions: [],
      } as EmployeePermissions;
    default:
      return {
        actions: [],
      };
  }
}


const managerPersmission = getPermissions("manager");

const employeePermissions = getPermissions("employee");

const customer = getPermissions("customer");
