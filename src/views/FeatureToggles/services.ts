import type { FeatureToggle } from './types'

export const SubmitFeatureToggles = async (featureToggles: FeatureToggle[] | null) => {
    if (!featureToggles) return;

    await fetch('http://localhost:3008/toggles', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: toggle.id,
            is_on: toggle.is_on,
        }),
    });
}