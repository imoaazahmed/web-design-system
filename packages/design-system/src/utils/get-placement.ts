type PlacementType = import('@chakra-ui/popper').Placement;
type placementDirectionBasedType = {
  [key in PlacementType]: PlacementType;
};
const placementDirectionBased: placementDirectionBasedType = {
  right: 'left',
  left: 'right',
  auto: 'auto',
  bottom: 'bottom',
  top: 'top',
  'auto-start': 'auto-start',
  'auto-end': 'auto-end',
  'top-start': 'top-end',
  'top-end': 'top-start',
  'bottom-start': 'bottom-end',
  'bottom-end': 'bottom-start',
  'right-start': 'left-start',
  'right-end': 'left-end',
  'left-start': 'right-start',
  'left-end': 'right-end',
};

export function getPlacementBasedOnDirection(
  placement: PlacementType,
  isRtl: boolean
) {
  if (!isRtl) return placement;
  return placementDirectionBased[placement];
}
