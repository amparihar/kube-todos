
export const envConfig = {
  api: {
    BASE_URL: window.REACT_APP_API_BASE_URL,
  }
};

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

export function handleError(error) {
  if (error.name === "AbortError") {
    console.log("Fetch request cancelled");
  } else {
    console.error("API call failed. " + error);
    throw error;
  }
}
