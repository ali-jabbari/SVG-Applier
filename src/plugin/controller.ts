
figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {

    if (msg.type === 'apply-svg') {
        const nodes = [];

        const image = figma.createNodeFromSvg(msg.image)
        figma.currentPage.appendChild(image);


        nodes.push(image)
        figma.currentPage.selection = nodes
        figma.viewport.scrollAndZoomIntoView(nodes);
    }

    else if (msg.type === 'remove-svg') {
        figma.currentPage.children[0].remove()
    }

    figma.closePlugin()
}