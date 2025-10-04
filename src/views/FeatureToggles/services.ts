import type { FeatureToggle } from './types'

export const SubmitToggleState = async (id: number, isOn: boolean) => {

    const response = await fetch('http://localhost:3008/toggles', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id,
            is_on: isOn,
        }),
    })

    const data = await response.json()

    return data as FeatureToggle
}