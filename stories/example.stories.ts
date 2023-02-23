import {StoryObj} from "@storybook/html";
import {Liquid} from "liquidjs";
const liquid = new Liquid({})


export default {
    title: 'Test',
    args:{
      name: "Dit is een testnaam"
    },
    argTypes: {
        name: {
            control: {
                type: 'text',
            }
        }
    }
}
export const Template: StoryObj = {
    render: (args, context) => {
        return liquid.parseAndRenderSync(require.context('../public/headcomponent.html').toString(), args)
    }
}