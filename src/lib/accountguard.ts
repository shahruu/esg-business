export interface AccountState {
  subscriptionStatus: "Active" | "Inactive";
  provisioningStatus: "Completed" | "Pending";
  sharepointUrl?: string;
}

// 🔧 replace with real API later
export async function fetchAccountState(): Promise<AccountState> {
  // TODO replace with real fetch
  // const res = await fetch("/api/account/state");
  // return res.json();

  // temp mock so UI works now
  return {
    subscriptionStatus: "Active",
    provisioningStatus: "Completed",
    sharepointUrl: "https://sharepoint.example.com/folder"
  };
}

export async function resolveReportingRoute(): Promise<string> {
  const state = await fetchAccountState();

  if (state.subscriptionStatus !== "Active") {
    return "/subscription";
  }

  if (state.provisioningStatus !== "Completed") {
    return "/workspace-setup";
  }

  return state.sharepointUrl || "/reporting";
}
