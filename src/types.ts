export type SmartCameraWebProps = {
  showAttribution: boolean;
  isPortraitCaptureView: boolean;
  showNavigation: boolean;
  supportBothCaptureModes: boolean;
  documentCaptureModes: boolean;
  captureBackOfID: boolean;
  hideBackToHost: boolean;
};
export type ImagesComputedEventDetails = {
  partner_params: {
    libraryVersion: string;
    permissionGranted: boolean;
  };
  images: Array<{
    image_type_id: number;
    image: string;
  }>;
};
