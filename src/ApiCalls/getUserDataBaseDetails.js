import { user_api } from "../Utilities/variables";
export const getUserDataBaseDetails = async (valuesProps, checking) => {
  try {
    const { email } = valuesProps;
    let queryParams;
    if (checking) {
      queryParams = new URLSearchParams({ email }).toString();
    } else {
      queryParams = new URLSearchParams(valuesProps).toString();
    }
    const url = `${user_api}?${queryParams}`;
    console.log("url is:", url);

    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await data.json();
    console.log("Server Response from getUserDataBaseDetails is :", result);
    return result;
  } catch (error) {
    console.log(
      "Error Server response from getUserDataBaseDetails is",
      error.message
    );
    return error;
  }
};
