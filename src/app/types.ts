export type ResultData = {
  results: Result[];
  links: Links;
};

type Result = {
  reconstructionReference: string;
  detailsReference: string;
  departureAccessLink: DepartureAccessLink;
  tripLegs: TripLeg[];
  connectionLinks: string[];
  isDeparted: boolean;
};

type DepartureAccessLink = {
  transportMode: string;
  transportSubMode: string;
  origin: Origin;
  destination: Destination;
  notes: string[];
  distanceInMeters: number;
  plannedDepartureTime: string;
  plannedArrivalTime: string;
  plannedDurationInMinutes: number;
  estimatedNumberOfSteps: number;
  linkCoordinates: LinkCoordinate[];
};

type Origin = {
  gid: string;
  name: string;
  locationType: string;
  latitude: number;
  longitude: number;
  plannedTime: string;
  estimatedOtherwisePlannedTime: string;
  notes: string[];
};

type Destination = {
  stopPoint: StopPoint;
  plannedTime: string;
  estimatedOtherwisePlannedTime: string;
  notes: string[];
};

type StopPoint = {
  gid: string;
  name: string;
  platform: string;
  stopArea: StopArea;
};

type StopArea = {
  gid: string;
  name: string;
  latitude: number;
  longitude: number;
  tariffZone1: TariffZone1;
};

type TariffZone1 = {
  gid: string;
  name: string;
  number: number;
  shortName: string;
};

type LinkCoordinate = {
  latitude: number;
  longitude: number;
};

type TripLeg = {
  origin: Origin2;
  destination: Destination2;
  isCancelled: boolean;
  isPartCancelled: boolean;
  serviceJourney: ServiceJourney;
  notes: string[];
  plannedDepartureTime: string;
  plannedArrivalTime: string;
  plannedDurationInMinutes: number;
  estimatedDepartureTime?: string;
  estimatedArrivalTime?: string;
  estimatedDurationInMinutes?: number;
  estimatedOtherwisePlannedArrivalTime: string;
  estimatedOtherwisePlannedDepartureTime: string;
  journeyLegIndex: number;
};

type Origin2 = {
  stopPoint: StopPoint2;
  plannedTime: string;
  estimatedTime?: string;
  estimatedOtherwisePlannedTime: string;
  notes: string[];
};

type StopPoint2 = {
  gid: string;
  name: string;
  platform: string;
  stopArea: StopArea2;
};

type StopArea2 = {
  gid: string;
  name: string;
  latitude: number;
  longitude: number;
  tariffZone1: TariffZone12;
};

type TariffZone12 = {
  gid: string;
  name: string;
  number: number;
  shortName: string;
};

type Destination2 = {
  stopPoint: StopPoint3;
  plannedTime: string;
  estimatedTime?: string;
  estimatedOtherwisePlannedTime: string;
  notes: string[];
};

type StopPoint3 = {
  gid: string;
  name: string;
  platform: string;
  stopArea: StopArea3;
};

type StopArea3 = {
  gid: string;
  name: string;
  latitude: number;
  longitude: number;
  tariffZone1: TariffZone13;
};

type TariffZone13 = {
  gid: string;
  name: string;
  number: number;
  shortName: string;
};

type ServiceJourney = {
  gid: string;
  direction: string;
  directionDetails: DirectionDetails;
  number: string;
  line: Line;
};

type DirectionDetails = {
  fullDirection: string;
  shortDirection: string;
};

type Line = {
  shortName: string;
  designation: string;
  isWheelchairAccessible: boolean;
  name: string;
  backgroundColor: string;
  foregroundColor: string;
  borderColor: string;
  transportMode: string;
  transportSubMode: string;
};

type Links = {
  previous: string;
  next: string;
  current: string;
};

export type Token = {
  access_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
};
