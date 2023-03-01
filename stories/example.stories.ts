import {StoryObj} from "@storybook/html";
import {Liquid} from "liquidjs";
const liquid = new Liquid({
    extname: '.html',
})


export default {
    title: 'Components/Example',
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