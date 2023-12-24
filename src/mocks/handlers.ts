import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api.login", () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickname: "hans",
        id: "dongh",
        image: "logo.png",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid-msw-cookie;httpOnly;Path=/",
        },
      }
    );
  }),
  http.post("/api/logout", () => {
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;httpOnly;Path=/;Max-Age=0",
      },
    });
  }),
];
