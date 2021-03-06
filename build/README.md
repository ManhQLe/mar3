# Overview of MoSyRe architecture

MoSyRe is a shorthand notation for **M**odularity, **S**ynchronicity and **R**eactiveness, commonly-seen attributes of all things in existence including software architecture. MoSyRe is a name (I made up) of software architecture which is designed to express such attributes .This type of architecture can facilitate communication and synchronicity between individuals in a coherent manner. Such that any change occurs in the connection/network, can be conveyed properly to where it is needed.

This architecture expreses the fundametal principle of **Change**

> One change leads to other changes.

## Fundametal Definitions
### Crystalization

> Crystalization in this context means, being in agreement to accept rules, conditions, or parameters to play a specific role or to function in a particular way. Crystalization process helps define and mold clay to have attributes/properties.  

### Clay

> A clay, as the name suggests, has no shape, no specific feature and is unfathomable. Its main quality is to connect and is capable of expressing core frequency of itself ONCE being crystalized/went through crystalization process AND being in connection with other clays.

### Attribute Clay

> Attribute Clay is a clay being crystalized to have properties, features and/or parameters. This type of clay can retain such properties/features and can change/replace those by ifself at will.

### Responsive Clay

> Responsive Clay is Clay or Attrib Clay, which can **response** to vibration/signal being received from connections. Reponse and react are main behaviors of this crystalized clay. Its reponse and react can vary based on the agreement it has through parameters and properties accepted in crystalization process.

### OverClay / SynthClay (synthesis/composite)

> OverClay is Clay or Attrib Clay, its functionality is functionalites of individual clays in totality. OverClay can be thought as composite clay. This type of clay can encapsulate small or large network of clays so that it can be a unit clay in larger networks.

### Conduit

> Conduit is Clay or Attrib Clay, its main function is to act as a link/bridge. Its **response** ability is to facilitate the connections and signal transmissions between clays. Once it picks up on a vibration from clay. This vibration will be replicated and reproduced on the network. Any clay connects to the this type of clay can pick up on this replicated vibration.

### Connection Point

> Each clay connects to other clay through a **point**. Point is the interface for how clays exchange information though. This is analogous to **contact point**. Point can be thought as physical contact point, usually described by giving a label. Point can also be thought as **time**. Point can also be a **protocol** for how clay will interpret the signal being transmitted. 

Analogies

1. In computer circuitry design, we tent to think of **point** as **pin** where components connect with each ohter.
2. Human often connects with other human through contact points e.g. Email, Phone Number ,places.
3. For neural network, dendrites connect to axons through tiny gaps interface where information/signal being exchanged.
4. In our current programming paradigm, we usually use event as conduit/point of communication between components.

## MoSyRe programming Mechanism in Computing

In order to integrate this type of architecture in software programming, programmers will need to:

1. Change programming mindset from sequential to parallel. Clays function in parallel.
2. Think of program as a network of clays connected and work together.
3. Design Responsive Clays as unit building blocks of application so each clay does one thing and does it very well.
4. Connect clays in a harmonious manner so that each clay can perform its job while communicating with each other to resolve the end goals.

This new paradigm enforces thinking in terms of **modularity**, **connectivity** and **flow**. Clay cannot work being by ifself. Clays only response when it being stimulated by signal from connections. Unexpected information sent to clays will result unexpected outcomes. 

Execution of the entire network of clays cannot be thought nor programmed in terms of sequential ordered executions but multi-order parallel executions in synchronicity. Architecture of a software will now be expressed as topology of network of clays. It is an art form in this type of programming to design clay functions and network architectures.

Predictablity of the outcomes can only be obtained when network is designed appropriately. This is because clays are not responsile for coordination and do not have the capabilities to control the entire flow of the network. We certainly can design specific clays to act as facilitators for synchronicity in specific regions of network so that the outcomes are expected. Larger network will requires more facilitators.


# Introduction to MoSyRe JS framework

MosyRe.js is a javascript library implements MoSyRe architecture.

# Installation

> npm install mosyrejs --save

# Development
Clone

> git clone https://github.com/ManhQLe/mosyrejs [Your Folder]

Build

```Shell
   # For Windows
   npm run build
   
   # For Linux
   chmod +x buildLinux.sh
   npm run build-linux
```        

## Class Diagram

```
    Symbols & Meanings

    ◆           Inheritable function 
    ▣           Static function
    
    ■[G/S]      Inheritable Property(default value)  
    [G/S]       Get and Set 

    ClassX ◄──   Inherit from ClassX    
```



```
    Clay ◄──── AttribClay ◄────┬──── RClay
                               |
                               ├──── Conduit
                               |
                               └──── SClay
             
```

## Programming Interface

### Quick Start

    The end goal is to create clays, and connect them together
    1. Create clay and define their behavior
    2. Connect them together to perform complex tasks


#### Example1

    Create a network which performs (NumA + NumB) * NumC

```
           .------.      .------.      .--------.
   NumA ---| ADD  |------| MULT |------| Logger |
           '--+---'      '---+--'      '--------'
   NumB ------'              |
                    NumC ----'
```

``` javascript
    const RClay = require('mosyre/RClay')
    const Conduit = require('mosyre/Conduit')

    const Add = new RClay({
        connectPoints:["A","B"],
        response(center){
            center.SUM = center.A + center.B
        }
    })

    const Mult = new RClay({
        connectPoints:["A","B"],
        response(center){
            center.PRODUCT = center.A * center.B
        }
    })

    const Log = new RClay({
        connectPoints:["INFO"],
        response(center){
            console.log(center.INFO)
        }
    })

    //Connect

    Conduit.link(Log,"INFO","PRODUCT",Mult);

    const linkA = Conduit.link(Add,"A");
    const linkB = Conduit.link(Add,"B");
    Conduit.link(Add,"SUM","A",Mult);
    const linkC = Conduit.link(Mult,"B");
    
    //Send information
    linkA.signal = 2.3
    linkB.signal = 4.3
    linkC.signal = 5
    
```

#### Example2
    Still thinking on an interesting one :)
``` javascript

```


### Clay
```javascript
    Clay(agreement): constructor

        ◆ onConnection(withClay, atPoint): void
        ◆ onCommunication(fromClay, atPoint, signal): void

        ▣ connect(clay1, clay2, atConnectPoint, atConnectPoint2)
        ▣ vibrate(clay, atConnectPoint, signal, sourceClay)
```
### AttribClay

``` javascript
    AttribClay(agreement): constructor

        ◆ createProp(propName, defaultValue [, getfx, setfx, store]): void
        ◆ isSameConnectionPoint(): Boolean

        ■[G/S] agreement({})
        ■[G/S] contacts (null)

        ▣ createProp(Object, propName, defVal, getFx, setFx, storage): void
```

### RClay

```javascript
    RClay(agreement): constructor

    //These folowing properties can be intializabled by agreement
    ■[G/S] staged(false)
    ■[G/S] connectPoints([]) 
    ■[G/S] response(function(){})
    ■[G/S] cystalize(function(){})
    ◆ onResponse(atLastPoint): void
    ◆ getCenter(): Object //center
    ◆ onInit(): void
    //Example of instantiation

    const Clay1 = new RClay({
        connectPoints:["X","Y"],
        response(center){
            //Send sum of signals to Z connect point.
            center.Z = center.X + center.Y
        }
    })

    //Example of inheritance

    class ClayDoSqrt extends RClay{
        constructor(agg){
            super(agg);

            this.response = (center)=>{
                //Send sqrt of signal to SQRT connect point
                center.SQRT = Math.sqrt(center.X)
            }
        }
    }

    const Clay2 = new ClayDoSqrt();


```

### SClay

``` javascript

    SuperClay(agreement): constructor

    ◆ onBuild(): Array // [[pI1, clay1, clayp1],[pI2, clay2, clayp2],[pI3, clay3, clayp3]...]


    //Example of instantiation
    const Add1 = new Adder()
    const Add2 = new Adder()
    const Mul = new Mult()

    Conduit.createLink(Add1,"C",Mul,"A");
    Conduit.createLink(Add2,"C",Mul,"B");

    const SClaySubject = new SClay({
        layoutMap:[
            ["A",Add1,"A"],
            ["A",Add1,"B"],
            ["B",Add2,"A"],
            ["B",Add2,"B"],
            ["R",Mul,"C"]
        ]    
    })

    const SClay2 = new SClay({
        build:(clay)=>{
            return [
                ["A",Add1,"A"],
                ["A",Add1,"B"],
                ["B",Add2,"A"],
                ["B",Add2,"B"],
                ["R",Mul,"C"]
            ]
        }    
    })

    //Example of Inheritance

    class ISClay extends SClay {
        constructor(agr){
            super(agr)
        }
        onBuild(){
            return [
                ["A",Add1,"A"],
                ["A",Add1,"B"],
                ["B",Add2,"A"],
                ["B",Add2,"B"],
                ["R",Mul,"C"]
            ]       
        }
    }

```

### Conduit

``` javascript

    Conduit():constructor
    ◆ link(Array): void    
    ▣ fromArray(Array): void
    ▣ createLink(clay1,connectPoint1,clay2,connectPoint2,....): void
```
