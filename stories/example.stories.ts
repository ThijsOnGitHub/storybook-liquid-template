import {StoryObj} from "@storybook/html";
import {Liquid} from "liquidjs";
const liquid = new Liquid({})


export default {
    title: 'Test',
    args:{
      name: "Dit is een testnaam",
        color: "#ff0000"
    },
    argTypes: {
        name: {
            control: {
                type: 'text',
            }
        },
        color: {
            control: {
                type: 'color',
            }
        }
    }
}
export const Template: StoryObj = {
    render: (args, context) => {
        return liquid.parseAndRenderSync(require.context('../public/headcomponent.html').toString(), args)
    }
}