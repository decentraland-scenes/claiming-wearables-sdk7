import { CONFIG } from "../config"

export type ClaimConfigInstType = {
	campaign: string,
	campaignKeys: Record<string, string>
}

const TEST_CAMPAIGN_ID = '7a7c87db-801a-4427-bf2b-2fab3d518b58'
//non captcha
const TEST_CAMPAIGN_KEY = 'eyJpZCI6IjY2NThmOGRiLWZjNGItNDQyMC05NTUzLWYyZDQxODRjZDY3YiIsImNhbXBhaWduX2lkIjoiN2E3Yzg3ZGItODAxYS00NDI3LWJmMmItMmZhYjNkNTE4YjU4In0=.lu0GNQ/5Tjl4QvAvJuFJ5hhjIPfyaeqVcWluMX/3WyY='


export const ClaimConfig = {
	rewardsServer: 'https://rewards.decentraland.org',
	campaign: {
		CAMPAIGN_TEST: {
			campaign: CONFIG.CONFIG_CLAIM_TESTING_ENABLED ? TEST_CAMPAIGN_ID : 'PROVIDE_CAMPAIGN_ID_HERE',
			campaignKeys: {
				KEY_0: CONFIG.CONFIG_CLAIM_TESTING_ENABLED ? TEST_CAMPAIGN_KEY : "PROVIDE_PRODUCTION_KEY_HERE"
			},
		},
	}
}