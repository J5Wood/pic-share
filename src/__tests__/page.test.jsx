// import Page from "../app/page";
// import { setupServer } from "msw/node";
// import { setupWorker, rest } from "msw";
// import { http, HttpResponse } from "msw";

// const SUPABASE_URL = import.meta.env.NEXT_PUBLIC_SUPABASE_URL;

// Mock posts rows response
// const posts = [
//   {
//     id: 21,
//     inserted_at: "2023-07-31 20:24:26.18793+00",
//     updated_at: "2023-07-31 20:24:26.18793+00",
//     content: "weeee",
//     user_id: "d56231c8-fda8-46ca-84dd-43ecea3e694f",
//     url: "https://res.cloudinary.com/dqzg3fumi/image/upload/v1690835065/bdyspp64fbaklzhhgfcp.jpg",
//     username: "chuckles",
//   },
//   {
//     id: 22,
//     inserted_at: "2023-07-31 20:25:04.821591+00",
//     updated_at: "2023-07-31 20:25:04.821591+00",
//     content: "bork bork",
//     user_id: "d56231c8-fda8-46ca-84dd-43ecea3e694f",
//     url: "https://res.cloudinary.com/dqzg3fumi/image/upload/v1690835103/fkhqqngnz29qsedgjygm.jpg",
//     username: "chuckles",
//   },
//   {
//     id: 23,
//     inserted_at: "2023-07-31 20:30:50.796037+00",
//     updated_at: "2023-07-31 20:30:50.796037+00",
//     content: "WOOPWOOP",
//     user_id: "d56231c8-fda8-46ca-84dd-43ecea3e694f",
//     url: "https://res.cloudinary.com/dqzg3fumi/image/upload/v1690835449/xqck8l20ngbyvldmfqkp.jpg",
//     username: "chuckles",
//   },
//   {
//     id: 24,
//     inserted_at: "2023-07-31 21:20:34.059349+00",
//     updated_at: "2023-07-31 21:20:34.059349+00",
//     content: "fwerfef",
//     user_id: "d56231c8-fda8-46ca-84dd-43ecea3e694f",
//     url: "https://res.cloudinary.com/dqzg3fumi/image/upload/v1690838433/aq6rtxbs0vlujsgafnz1.jpg",
//     username: "chuckles",
//   },
//   {
//     id: 25,
//     inserted_at: "2023-07-31 21:21:06.680303+00",
//     updated_at: "2023-07-31 21:21:06.680303+00",
//     content: "wefqweqwdqwdeqwe",
//     user_id: "d56231c8-fda8-46ca-84dd-43ecea3e694f",
//     url: "https://res.cloudinary.com/dqzg3fumi/image/upload/v1690838465/tvr3aupnfxxbu0imlrut.jpg",
//     username: "chuckles",
//   },
// ];

// http.get(`${SUPABASE_URL}/rest/v1/posts`, ({ request, params, cookies }) => {
//   return posts;
// });

// const server = setupServer(
//   http.get(`${SUPABASE_URL}/rest/v1/posts`, async () => {
//     return posts;
//   })
// );

// http.get("/user/:id", ({ params }) => {
//   const { id } = params;
//   console.log('Fetching user with ID "%s"', id);
// });

// const server = setupWorker(
//   rest.get(`${SUPABASE_URL}/rest/v1/posts`, async (req, res, ctx) => {
//     switch (req.method) {
//       case "GET":
//         return res(ctx.json([posts]));
//       default:
//         return res(ctx.json("Unhandled method"));
//     }
//   })
// );

// beforeAll(() => server.start());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.stop());

// test("App Router", async () => {
//   await render(<Page />);
//   expect(await screen.findByText(posts[0].content)).toBeInTheDocument();
//   // expect(true).toBe(true);
//   // const main = findByRole("main");
//   // expect("main").toBeDefined();
// });

// test("BUH", async () => {
//   const session = true;
//   const postLiked = true;
//   const postId = 12;

//   render(<Heart session={session} postLiked={postLiked} postId={postId} />);
//   expect(true).toBe(true);
// const main = findByRole("main");
// expect("main").toBeDefined();
// });
