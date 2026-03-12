from models import Car, Motorcycle

def main():
    my_car = Car("Toyota", "Camry", 2022, 4)
    my_bike = Motorcycle("Harley-Davidson", "Iron 883", 2021, False)

    garage = [my_car, my_bike]

    print("My garage:")
    
    for vehicle in garage:
        print(f"Transport: {vehicle}") 
        
        print(f"Action: {vehicle.start_engine()}")
        
        if isinstance(vehicle, Car):
            print(f"Feature: {vehicle.open_trunk()}")
        elif isinstance(vehicle, Motorcycle):
            print(f"Feature: {vehicle.do_wheelie()}")
        
        print("-" * 20)

if __name__ == "__main__":
    main()