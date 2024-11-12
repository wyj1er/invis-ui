import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", function () {
    // mount
    test("mount  @vue/test-utils", function () {
        // @vue/test-utils
        var wrapper = shallowMount(Button, {
            slots: {
                default: "Button",
            },
        });
        // 断言
        expect(wrapper.text()).toBe("Button");
    });
    describe("color", function () {
        test("default", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("bg-blue-500")).toBe(true);
        });
        test("red", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
                props: {
                    color: "red",
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("bg-red-500")).toBe(true);
        });
    });
    describe("round", function () {
        test("default", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("rounded-lg")).toBe(true);
        });
        test("round:true", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
                props: {
                    round: true,
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("rounded-full")).toBe(true);
        });
    });
    describe("plain", function () {
        test("default", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("bg-blue-500")).toBe(true);
        });
        test("plain:true", function () {
            var wrapper = shallowMount(Button, {
                slots: {
                    default: "Button",
                },
                props: {
                    plain: true,
                },
            });
            expect(wrapper
                .classes()
                .map(function (v) { return v.replace("\n", ""); })
                .includes("bg-blue-100")).toBe(true);
        });
    });
    test("icon", function () {
        var wrapper = shallowMount(Button, {
            slots: {
                default: "Button",
            },
            props: {
                icon: "edit",
            },
        });
        expect(wrapper
            .find("i")
            .classes()
            .map(function (v) { return v.replace("\n", ""); })
            .includes("i-ic-baseline-edit")).toBe(true);
    });
});
