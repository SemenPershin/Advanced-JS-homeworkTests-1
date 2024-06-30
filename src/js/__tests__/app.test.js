import { healthStatus } from '../app.js';

test('healthy health', () => {
    const testObj = {name: "Маг", health: 90};
    expect(healthStatus(testObj)).toBe("healthy")
});

test('wounded health', () => {
    const testObj = {name: "Маг", health: 30};
    expect(healthStatus(testObj)).toBe("wounded")
});

test('critical health', () => {
    const testObj = {name: "Маг", health: 10};
    expect(healthStatus(testObj)).toBe("critical")
});