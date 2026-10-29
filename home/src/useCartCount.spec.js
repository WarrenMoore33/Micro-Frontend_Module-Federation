import { renderHook, act } from "@testing-library/react-hooks";
import { useCartCount } from "./useCartCount";

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: jest.fn(),
  },
}));

describe("useCartCount", () => {
  it("should return the initial cart count", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });

  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      const mockCallback = jest.fn();
      const mockCart = {
        cartItems: [{ id: 1 }, { id: 2 }],
        subscribe: (callback) => {
          mockCallback(callback);
          callback({ cartItems: [{ id: 1 }, { id: 2 }] });
          return { unsubscribe: jest.fn() };
        },
      };
      jest.mock("cart/cart", () => ({ cart: mockCart }));
    });
    expect(result.current).toBe(2);
  });
});
