// Yoinked from https://www.youtube.com/watch?v=mHlB7h2pixU
/*
interface IState
{
	name: string
	onEnter?: () => void
	onUpdate?: (dt: number) => void
	onExit?: () => void
}

let idCount = 0;

export default class StateMachine
{
	private id = (++idCount).toString();
    private context?: object;
    private states = new Map<string, IState>();
	
    private previousState?: IState;
    private currentState?: IState;
    private isChangingState = false;
    private stateQueue: string[] = [];
    private changeStateQueue: string[] = [];

    get previousStateName(): string {
        if (!this.previousState) {
            return '';
        }
        return this.previousState.name;
    }

    constructor(context?: object, id?: string) {
        this.id = id ?? this.id;
        this.context = context;
    }

    isCurrentState(name: string) {
        if (!this.currentState) {
            return false;
        }
        return this.currentState.name === name;
    }

	addState(name: string, config?: { onEnter?: () => void, onUpdate?: (dt: number) => void, onExit?: () => void }) {
        const context = this.context;

        this.states.set(name, {
            name,
            onEnter: config?.onEnter?.bind(context),
            onUpdate: config?.onUpdate?.bind(context),
            onExit: config?.onExit?.bind(context)
        })
    }

	setState(name: string): StateConfig {
        if (!this.states.has(name)) {
            console.warn('Tried to change to unkown state: ${name}');
            return;
        }

        if (this.isCurrentState(name)) {
            return;
        }

        if (this.isChangingState) {
            this.changeStateQueue.push(name);
            return;
        }

        this.isChangingState = true;

        console.log('[StateMachine (${this.id})] change from ${this.currentState')
	}

	update(dt: number) {
		if (this.stateQueue.length) {
            const name = this.stateQueue.shift();
        }

        if (!this.currentState) {
            return;
        } 
        if (this.currentState.onUpdate(dt)) {
            this.currentState.onUpdate(dt); 
        }
	}
}
*/