class MarkerFuel extends Marker{
    refuel(count = 0){
        const newInk = this.ink + count;
        this.ink = newInk > 100 ? 100 : newInk;
    }
}