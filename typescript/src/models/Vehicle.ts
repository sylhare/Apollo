export interface Vehicle {
  id: string;
  name: string;
  rims: Rim[];
  tires: Tire[];
}

export interface Rim {
  id: string
  tire?: Tire;
  vehicle?: Vehicle;
}

export interface Tire {
  id: string;
  rim?: Rim;
  vehicle?: Vehicle;
}
