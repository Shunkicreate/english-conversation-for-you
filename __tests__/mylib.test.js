import { add } from "../mylib";
import { ChatDecoder } from "src/functions/ChatDecoder.tsx";
// test("add 1 + 2", () => {
//   expect(add(1, 2)).toBe(3);
// });
import { TextCleaner } from 'src/functions/TextCleaner'


const inputstr = ```
AI:
1. Ground beef
2. Buns
3. Cheese
4. Lettuce
5. Tomato
6. Ketchup
7. Mustard
8. Pickles
```;
const resultstr = { person: "AI", message: "1. Ground beef2. Buns3. Cheese4. Lettuce5. Tomato6. Ketchup7. Mustard8. Pickles" };

// test("ChatDecoder", (inputstr, resultstr) => {
//   expect(ChatDecoder(inputstr)).toBe(resultstr);
// });

test("TextCleaner", () => {
  expect(TextCleaner("aaaaa\nOpenAI:\n\nHello! How:: :: \n :::: can I help you tod\nay?")).toBe("AI:Hello! How can I help you today?");
});

