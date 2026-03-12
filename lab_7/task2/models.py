class Vehicle:
    def __init__(self, brand, model, year):
        # attributes
        self.brand = brand
        self.model = model
        self.year = year
        self.is_running = False

    def start_engine(self):
        self.is_running = True
        return f"Engine {self.brand} {self.model} wound up."

    def stop_engine(self):
        self.is_running = False
        return f"Engine {self.brand} {self.model} off."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


# 1 child class
class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors 

    def open_trunk(self):
        return "The trunk is open."

    # Override
    def start_engine(self):
        return f"Car {self.brand} rustled quietly."


# 2 child class
class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar 

    
    def do_wheelie(self):
        return f"{self.brand} got on the back wheel! Yoohoo!"

    # Override
    def start_engine(self):
        return f"Motorbike {self.brand}roared loudly: BLA BLA BLA BLE BLE BLE BLU BLU BLU BLU HA BLBUBLUBLUBLUBLU"