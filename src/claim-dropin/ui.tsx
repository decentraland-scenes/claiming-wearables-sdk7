import { Color4 } from '@dcl/sdk/math'
import { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import  *  as  ui  from  'dcl-ui-toolkit'


export function openUI(thumbnail: string, wearableName: string ){

	ReactEcsRenderer.setUiRenderer(ui.render)


	const customPrompt = ui.createComponent(ui.CustomPrompt, {
		style: ui.PromptStyles.DARK,
		height: 300,
	})


	const promptTitle = customPrompt.addText({
		value: 'Wearable incoming!',
		xPosition: 0,
		yPosition: 135,
		color: Color4.Green(),
		size: 30,
	})

	const promptText = customPrompt.addText({
		value: "It will arrive in your backpack in a few minutes.",
		xPosition: 0,
		yPosition: 100,
	})


	const promptButtonE = customPrompt.addButton({
		style: ui.ButtonStyles.E,
		text: 'Ok',
		xPosition: 0,
		yPosition: -120,
		onMouseDown: () => {
			console.log('Yeah clicked')
			customPrompt.hide()
		},
	})

	const promptIcon = customPrompt.addIcon({
		image: thumbnail,
		xPosition: 0,
		yPosition: 5,
		height: 125,
		width: 125
	})


	const name = customPrompt.addText({
		value: wearableName,
		xPosition: 0,
		yPosition: -70,
		size: 20,
	})

	customPrompt.show()
}


export function alreadyClaimedUI(){

	ReactEcsRenderer.setUiRenderer(ui.render)

	const prompt = ui.createComponent(ui.OkPrompt, {
		text: 'You already claimed this wearable!',
		onAccept: () => {
			console.log('accepted')
			prompt.hide()
		},
		acceptLabel: 'Ok',
		useDarkTheme: true,
		textSize: 20,
		width: 450,
		height: 300,
		startHidden: false,
	})
}