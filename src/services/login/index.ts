import Constant from "../../constant/index";

export const getCommunityList = async (
  partnerId: string,
  lang: string = "th"
) => {
  const response = await fetch(
    Constant.API_ENDPOINT + `/GetCommunityList/${partnerId}/${lang}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  ).then(async (res) => {
    return {
      data: res.ok ? await res.json() : {},
      status: res.status,
    };
  });
  return response;
};
