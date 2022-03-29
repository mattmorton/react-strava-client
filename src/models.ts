interface MetaAthlete {
  id: number;
  resource_state: number;
}

interface MetaActivity {
  id: number;
  resource_state: number;
}

interface PolylineMap {
  id: string;
  polyline: string;
  resource_state: number;
  summary_polyline: string;
}

export enum ActivityType {
  RUN = 'run',
  RIDE = 'ride',
  SWIM = 'swim'
}

interface ActivityTotals {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
}

interface RecentActivityTotals extends ActivityTotals {
  achievement_count: number
}

interface Segment {
  id: number;
  resource_state: number;
  name: string;
  activity_type: string;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: number[];
  end_latlng: number[];
  elevation_profile?: any;
  start_latitude: number;
  start_longitude: number;
  end_latitude: number;
  end_longitude: number;
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  hazardous: boolean;
  starred: boolean;
}

interface Achievement {
  type_id: number;
  type: string;
  rank: number;
}

interface SegmentEffort {
  id: any;
  resource_state: number;
  name: string;
  activity: MetaActivity;
  athlete: MetaAthlete;
  elapsed_time: number;
  moving_time: number;
  start_date: Date;
  start_date_local: Date;
  distance: number;
  start_index: number;
  end_index: number;
  average_cadence: number;
  device_watts: boolean;
  average_heartrate: number;
  max_heartrate: number;
  segment: Segment;
  pr_rank?: number;
  achievements: Achievement[];
  hidden: boolean;
}

interface SplitsMetric {
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  moving_time: number;
  split: number;
  average_speed: number;
  average_grade_adjusted_speed: number;
  average_heartrate: number;
  pace_zone: number;
}

interface SplitsStandard {
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  moving_time: number;
  split: number;
  average_speed: number;
  average_grade_adjusted_speed: number;
  average_heartrate: number;
  pace_zone: number;
}

interface Lap {
  id: any;
  resource_state: number;
  name: string;
  activity: MetaActivity;
  athlete: MetaAthlete;
  elapsed_time: number;
  moving_time: number;
  start_date: Date;
  start_date_local: Date;
  distance: number;
  start_index: number;
  end_index: number;
  total_elevation_gain: number;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  device_watts: boolean;
  average_heartrate: number;
  max_heartrate: number;
  lap_index: number;
  split: number;
  pace_zone: number;
  formattedPace?: number;
}
interface BestEffort {
  id: any;
  resource_state: number;
  name: string;
  activity: MetaActivity;
  athlete: MetaAthlete;
  elapsed_time: number;
  moving_time: number;
  start_date: Date;
  start_date_local: Date;
  distance: number;
  start_index: number;
  end_index: number;
  pr_rank?: any;
  achievements: any[];
}

interface Gear {
  id: string;
  primary: boolean;
  name: string;
  nickname: string;
  resource_state: number;
  retired: boolean;
  distance: number;
  converted_distance: number;
}

interface Photos {
  primary?: any;
  count: number;
}

interface StatsVisibility {
  type: string;
  visibility: string;
}

interface Trend {
  speeds: number[];
  current_activity_index: number;
  min_speed: number;
  mid_speed: number;
  max_speed: number;
  direction: number;
}

interface SimilarActivities {
  effort_count: number;
  average_speed: number;
  min_average_speed: number;
  mid_average_speed: number;
  max_average_speed: number;
  pr_rank?: any;
  frequency_milestone?: any;
  trend: Trend;
  resource_state: number;
}

export interface DetailedActivity {
  resource_state: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  workout_type?: any;
  id: number;
  start_date: Date;
  start_date_local: Date;
  timezone: string;
  utc_offset: number;
  location_city?: any;
  location_state?: any;
  location_country: string;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id: string;
  start_latlng: number[];
  end_latlng: number[];
  start_latitude: number;
  start_longitude: number;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high: number;
  elev_low: number;
  upload_id: number;
  upload_id_str: string;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  description?: any;
  calories: number;
  perceived_exertion?: any;
  prefer_perceived_exertion?: any;
  segment_efforts: SegmentEffort[];
  splits_metric: SplitsMetric[];
  splits_standard: SplitsStandard[];
  laps: Lap[];
  best_efforts: BestEffort[];
  gear: Gear;
  photos: Photos;
  stats_visibility: StatsVisibility[];
  hide_from_home: boolean;
  device_name: string;
  embed_token: string;
  private_note?: any;
  similar_activities: SimilarActivities;
  available_zones: any[];
}

export interface AthleteStats {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: RecentActivityTotals;
  all_ride_totals: ActivityTotals;
  recent_run_totals: RecentActivityTotals;
  all_run_totals: ActivityTotals;
  recent_swim_totals: RecentActivityTotals;
  all_swim_totals: ActivityTotals;
  ytd_ride_totals: ActivityTotals;
  ytd_run_totals: ActivityTotals;
  ytd_swim_totals: ActivityTotals;
}


export interface SummaryActivity {
  resource_state: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  workout_type?: any;
  id: number;
  start_date: Date;
  start_date_local: Date;
  timezone: string;
  utc_offset: number;
  location_city?: any;
  location_state?: any;
  location_country: string;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id: string;
  start_latlng: number[];
  end_latlng: number[];
  start_latitude: number;
  start_longitude: number;
  average_speed: number;
  max_speed: number;
  average_cadence: number;
  has_heartrate: boolean;
  average_heartrate: number;
  max_heartrate: number;
  heartrate_opt_out: boolean;
  display_hide_heartrate_option: boolean;
  elev_high: number;
  elev_low: number;
  upload_id: number;
  upload_id_str: string;
  external_id: string;
  from_accepted_tag: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
}

export interface DetailedAthlete {
  id: number;
  username?: any;
  resource_state: number;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: string;
  sex: string;
  premium: boolean;
  summit: boolean;
  created_at: Date;
  updated_at: Date;
  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend?: any;
  follower?: any;
  blocked: boolean;
  can_follow: boolean;
  follower_count: number;
  friend_count: number;
  mutual_friend_count: number;
  athlete_type: number;
  date_preference: string;
  measurement_preference: string;
  clubs: any[];
  ftp?: any;
  bikes: any[];
  shoes: any[];
}