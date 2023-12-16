export interface FeatureToggle {
  id: string
  name: string
  description: string
  isOn: boolean
  toggleDate: string | null
  toggledBy: string | null
}
