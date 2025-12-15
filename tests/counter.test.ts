import { beforeEach, describe, expect, test } from "vitest";
import { setupCounter } from "../src/counter";

describe("setupCounter", () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = document.createElement("button");
  });

  test("初期値が0で表示される", () => {
    setupCounter(button);
    expect(button.innerHTML).toBe("count is 0");
  });

  test("クリックするとカウントが1増える", () => {
    setupCounter(button);
    button.click();
    expect(button.innerHTML).toBe("count is 1");
  });

  test("複数回クリックするとカウントが増え続ける", () => {
    setupCounter(button);
    button.click();
    button.click();
    button.click();
    expect(button.innerHTML).toBe("count is 3");
  });

  test("複数のボタンでそれぞれ独立したカウンターが動作する", () => {
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    setupCounter(button1);
    setupCounter(button2);

    button1.click();
    button1.click();
    button2.click();

    expect(button1.innerHTML).toBe("count is 2");
    expect(button2.innerHTML).toBe("count is 1");
  });
});
