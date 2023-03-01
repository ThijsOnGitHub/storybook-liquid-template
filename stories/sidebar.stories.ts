import {StoryObj} from "@storybook/html";
import {Liquid} from "liquidjs";
const liquid = new Liquid({
    extname: '.html',
})


export default {
    title: 'Components/SideBar',
    args:{
      items: ["Home", "About us", "Settings"],
        slogan: "Your money, our job",
        image: ["/img/contoso logo.png"],
        sidebarWidth: "200px"
    },
    argTypes: {
        items: {
            control: {
                type: 'object',
            }
        },
        image:{
            control: {
                type: 'file',
                accept: ".png",
            }
        }
    }
}
export const Basic: StoryObj = {
    render: (args, context) => {
        return liquid.parseAndRenderSync(require.context('../public/TestSideBar.html').toString(), {...args, image: args.image[0]})
    }
}

export const ALotOfItems: StoryObj = {
    args:{
        items:["Home", "Second item", "Third item", "Fourth item", "Fifth item", "Sixth item", "Seventh item", "Eighth item", "Ninth item", "Tenth item", "Eleventh item", "Twelfth item", "Thirteenth item", "Fourteenth item", "Fifteenth item", "Sixteenth item", "Seventeenth item", "Eighteenth item", "Nineteenth item", "Twentieth item", "Twenty first item", "Twenty second item", "Twenty third item", "Twenty fourth item", "Twenty fifth item", "Twenty sixth item", "Twenty seventh item", "Twenty eighth item", "Twenty ninth item", "Thirtieth item", "Thirty first item", "Thirty second item", "Thirty third item", "Thirty fourth item", "Thirty fifth item", "Thirty sixth item", "Thirty seventh item", "Thirty eighth item", "Thirty ninth item", "Fortieth item", "Forty first item", "Forty second item", "Forty third item", "Forty fourth item", "Forty fifth item", "Forty sixth item", "Forty seventh item", "Forty eighth item", "Forty ninth item", "Fiftieth item"],
    },
    render: Basic.render
}

export const WideBar: StoryObj= {
    ...Basic,
    args:{
        ...Basic.args,
        sidebarWidth: "500px"
    }
}