export function getNeededNumberOfSquares(currPixelSize: number) {
  const SQUARE_PIXELS = Math.pow(500, 2);
  const SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL = Math.pow(currPixelSize, 2);
  return Math.round(SQUARE_PIXELS / SQUARE_PIXELS_OF_INDIVIDUAL_PIXEL);
}