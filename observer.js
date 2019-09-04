function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, start) {
  let i = start;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }

    i++;
  }

  return -1;
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
  const observerCount = this.observers.count;

  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

function Observer() {
  // should be overwritten by ConcreteObserver
  this.update = function() {
    throw new Error('Not implemented');
  };
}
