import * as AppButton_stories from "~/components/atoms/AppButton/AppButton.stories"
// @ponicode
describe("AppButton_stories.NotDisablePlainButton", () => {
    test("0", () => {
        let callFunction: any = () => {
            AppButton_stories.NotDisablePlainButton()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("AppButton_stories.NotDisablePrimaryButton", () => {
    test("0", () => {
        let callFunction: any = () => {
            AppButton_stories.NotDisablePrimaryButton()
        }
    
        expect(callFunction).not.toThrow()
    })
})
