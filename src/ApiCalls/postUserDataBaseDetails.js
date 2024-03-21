import { user_api } from "../Utilities/variables";
export const postUserDataBaseDetails = async (valuesProps) => {
  try {
    const data = await fetch(user_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valuesProps),
    });
    console.log("Server response from postUserDataBaseDetails is:", data);
    return data;
  } catch (error) {
    console.log("error Server response from postUserDataBaseDetails is", error);
    return error;
  }
};
