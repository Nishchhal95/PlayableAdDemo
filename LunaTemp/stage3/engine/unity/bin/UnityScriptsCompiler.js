if ( TRACE ) { TRACE( JSON.parse( '["CatController#init","CatController#Update","CatController#FixedUpdate","CatController#OnPointerPress","CatController#OnPointerRelease","CatController#OnPointerMove","CatController#DetectDrag","CatController#MoveCat","CatController#OnTriggerEnter","CatController#GameEnd","CatController#LunaLifeCycleEnd","GuardController#init","GuardController#Start","GuardController#Update","GuardController#MoveRoutine","GuardController#SwitchTarget","GuardController#LookForPlayer","GuardController#IsPlayerInRange","GuardController#CanRaycastPlayer","GuardController#OnDrawGizmos"]' ) ); }
/**
 * @version 1.0.9052.31504
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CatController start.*/
    Bridge.define("CatController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            GameOver: false,
            catRb: null,
            dragThreshold: 0,
            moveSpeed: 0,
            startPointerPosition: null,
            currentPointerPosition: null,
            dragDirection: null,
            moveDirection: null,
            pointerPressed: false,
            isDragging: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CatController#init", this ); }

                this.startPointerPosition = new UnityEngine.Vector2();
                this.currentPointerPosition = new UnityEngine.Vector2();
                this.dragDirection = new UnityEngine.Vector2();
                this.moveDirection = new UnityEngine.Vector3();
                this.dragThreshold = 20.0;
                this.moveSpeed = 0.01;
                this.pointerPressed = false;
                this.isDragging = false;
            }
        },
        methods: {
            /*CatController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CatController#Update", this ); }

                if (UnityEngine.Input.GetMouseButtonDown(0)) {
                    this.OnPointerPress();
                } else if (UnityEngine.Input.GetMouseButtonUp(0)) {
                    this.OnPointerRelease();
                }

                this.OnPointerMove();
            },
            /*CatController.Update end.*/

            /*CatController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "CatController#FixedUpdate", this ); }

                this.MoveCat();
            },
            /*CatController.FixedUpdate end.*/

            /*CatController.OnPointerPress start.*/
            OnPointerPress: function () {
if ( TRACE ) { TRACE( "CatController#OnPointerPress", this ); }

                this.startPointerPosition = UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition.$clone());
                this.pointerPressed = true;
            },
            /*CatController.OnPointerPress end.*/

            /*CatController.OnPointerRelease start.*/
            OnPointerRelease: function () {
if ( TRACE ) { TRACE( "CatController#OnPointerRelease", this ); }

                this.pointerPressed = false;
                this.isDragging = false;
            },
            /*CatController.OnPointerRelease end.*/

            /*CatController.OnPointerMove start.*/
            OnPointerMove: function () {
if ( TRACE ) { TRACE( "CatController#OnPointerMove", this ); }

                if (!this.pointerPressed) {
                    return;
                }

                this.DetectDrag(UnityEngine.Vector2.FromVector3(UnityEngine.Input.mousePosition));
            },
            /*CatController.OnPointerMove end.*/

            /*CatController.DetectDrag start.*/
            DetectDrag: function (currentPointerPos) {
if ( TRACE ) { TRACE( "CatController#DetectDrag", this ); }

                this.currentPointerPosition = currentPointerPos.$clone();
                // This is not normalized as we want to make sure the further we drag the faster we move.
                this.dragDirection = this.currentPointerPosition.$clone().sub( this.startPointerPosition );
                this.moveDirection = new pc.Vec3( this.dragDirection.x, 0, this.dragDirection.y );
                if (this.dragDirection.length() <= this.dragThreshold) {
                    this.isDragging = false;
                    return;
                }
                this.isDragging = true;
            },
            /*CatController.DetectDrag end.*/

            /*CatController.MoveCat start.*/
            MoveCat: function () {
if ( TRACE ) { TRACE( "CatController#MoveCat", this ); }

                if (!this.isDragging) {
                    return;
                }

                var newPosition = this.catRb.position.$clone().add( this.moveDirection.$clone().clone().scale( (this.moveSpeed * UnityEngine.Time.fixedDeltaTime) ) );
                var newRotation = new pc.Quat().setLookAt( this.moveDirection, pc.Vec3.UP );
                this.catRb.velocity = pc.Vec3.ZERO.clone();
                this.catRb.velocity = newPosition.$clone().sub( this.catRb.position );
                //catRb.MovePosition(newPosition);
                this.catRb.MoveRotation(newRotation);
            },
            /*CatController.MoveCat end.*/

            /*CatController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "CatController#OnTriggerEnter", this ); }

                if (!other.CompareTag("Win")) {
                    return;
                }
                this.LunaLifeCycleEnd();
            },
            /*CatController.OnTriggerEnter end.*/

            /*CatController.GameEnd start.*/
            GameEnd: function () {
if ( TRACE ) { TRACE( "CatController#GameEnd", this ); }

                this.GameOver = true;
                this.LunaLifeCycleEnd();
            },
            /*CatController.GameEnd end.*/

            /*CatController.LunaLifeCycleEnd start.*/
            LunaLifeCycleEnd: function () {
if ( TRACE ) { TRACE( "CatController#LunaLifeCycleEnd", this ); }

                Luna.Unity.LifeCycle.GameEnded();
                Luna.Unity.Playable.InstallFullGame();
            },
            /*CatController.LunaLifeCycleEnd end.*/


        }
    });
    /*CatController end.*/

    /*GuardController start.*/
    Bridge.define("GuardController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            visionRange: 0,
            visionAngle: 0,
            obstacleMask: null,
            startingPoint: null,
            endPoint: null,
            startingPosition: null,
            targetPoint: null,
            canMove: false,
            timeElapsed: 0,
            timeDuration: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GuardController#init", this ); }

                this.obstacleMask = new UnityEngine.LayerMask();
                this.startingPosition = new UnityEngine.Vector3();
                this.visionRange = 1.0;
                this.visionAngle = 60.0;
                this.timeElapsed = 0.0;
                this.timeDuration = 100.0;
            }
        },
        methods: {
            /*GuardController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GuardController#Start", this ); }

                this.canMove = true;
                this.transform.position = this.startingPoint.position.$clone();
                this.startingPosition = this.transform.position.$clone();
                this.targetPoint = this.endPoint;
                this.StartCoroutine$1(this.MoveRoutine());
            },
            /*GuardController.Start end.*/

            /*GuardController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GuardController#Update", this ); }

                this.LookForPlayer();
            },
            /*GuardController.Update end.*/

            /*GuardController.MoveRoutine start.*/
            MoveRoutine: function () {
if ( TRACE ) { TRACE( "GuardController#MoveRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.canMove && !this.player.GameOver ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    this.transform.position = new pc.Vec3().lerp( this.startingPosition, this.targetPoint.position, this.timeElapsed / this.timeDuration );
                                        this.timeElapsed += UnityEngine.Time.deltaTime;

                                        if (pc.Vec3.distance( this.transform.position, this.targetPoint.position ) <= 0.01) {
                                            this.transform.position = this.targetPoint.position.$clone();
                                            this.SwitchTarget();
                                            this.timeElapsed = 0.0;
                                        }

                                        $enumerator.current = null;
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GuardController.MoveRoutine end.*/

            /*GuardController.SwitchTarget start.*/
            SwitchTarget: function () {
if ( TRACE ) { TRACE( "GuardController#SwitchTarget", this ); }

                if (UnityEngine.Component.op_Equality(this.targetPoint, this.startingPoint)) {
                    this.startingPosition = this.startingPoint.position.$clone();
                    this.targetPoint = this.endPoint;
                } else if (UnityEngine.Component.op_Equality(this.targetPoint, this.endPoint)) {
                    this.startingPosition = this.endPoint.position.$clone();
                    this.targetPoint = this.startingPoint;
                }

                this.transform.Rotate$1(pc.Vec3.UP.clone(), 180);
                // The Rotation flip above works much cleaner and for an Ad it does the job.

                // Quaternion lookRotation = Quaternion.LookRotation(targetPoint.position);
                // Vector3 lookRotationEulerAngles = lookRotation.eulerAngles;
                // lookRotationEulerAngles.x = 0;
                // lookRotationEulerAngles.z = 0;
                //transform.rotation = Quaternion.Euler(lookRotationEulerAngles);
            },
            /*GuardController.SwitchTarget end.*/

            /*GuardController.LookForPlayer start.*/
            LookForPlayer: function () {
if ( TRACE ) { TRACE( "GuardController#LookForPlayer", this ); }

                if (this.player.GameOver) {
                    return;
                }

                if (!this.IsPlayerInRange()) {
                    return;
                }

                var directionToPlayer = (this.player.transform.position.$clone().sub( this.transform.position )).clone().normalize().$clone();

                var angleToPlayer = Math.acos( pc.math.clamp( this.transform.forward.clone().normalize().dot( directionToPlayer.clone().normalize() ), -1, 1 ) ) * pc.math.RAD_TO_DEG;
                if (angleToPlayer < this.visionAngle / 2) {
                    if (!this.CanRaycastPlayer(directionToPlayer)) {
                        UnityEngine.Debug.Log$1("Player Detected!");
                        this.player.GameEnd();
                        this.canMove = false;
                    }
                }
            },
            /*GuardController.LookForPlayer end.*/

            /*GuardController.IsPlayerInRange start.*/
            IsPlayerInRange: function () {
if ( TRACE ) { TRACE( "GuardController#IsPlayerInRange", this ); }

                var $t;
                var hitObjects = UnityEngine.Physics.OverlapSphere(this.transform.position, this.visionRange);
                if (hitObjects.length === 0) {
                    return false;
                }

                $t = Bridge.getEnumerator(hitObjects);
                try {
                    while ($t.moveNext()) {
                        var hitObject = $t.Current;
                        if (hitObject.CompareTag("Player")) {
                            return true;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                return false;
            },
            /*GuardController.IsPlayerInRange end.*/

            /*GuardController.CanRaycastPlayer start.*/
            CanRaycastPlayer: function (directionToPlayer) {
if ( TRACE ) { TRACE( "GuardController#CanRaycastPlayer", this ); }

                var hit = { v : new UnityEngine.RaycastHit() };
                return UnityEngine.Physics.Raycast$3(this.transform.position, directionToPlayer, hit, this.visionRange, UnityEngine.LayerMask.op_Implicit(this.obstacleMask.$clone()));
            },
            /*GuardController.CanRaycastPlayer end.*/

            /*GuardController.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "GuardController#OnDrawGizmos", this ); }

                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
            },
            /*GuardController.OnDrawGizmos end.*/


        }
    });
    /*GuardController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["UnityEngine","System","System.Collections"];

    /*CatController start.*/
    $m("CatController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DetectDrag","t":8,"pi":[{"n":"currentPointerPos","pt":$n[0].Vector2,"ps":0}],"sn":"DetectDrag","rt":$n[1].Void,"p":[$n[0].Vector2]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"GameEnd","t":8,"sn":"GameEnd","rt":$n[1].Void},{"a":1,"n":"LunaLifeCycleEnd","t":8,"sn":"LunaLifeCycleEnd","rt":$n[1].Void},{"a":1,"n":"MoveCat","t":8,"sn":"MoveCat","rt":$n[1].Void},{"a":1,"n":"OnPointerMove","t":8,"sn":"OnPointerMove","rt":$n[1].Void},{"a":1,"n":"OnPointerPress","t":8,"sn":"OnPointerPress","rt":$n[1].Void},{"a":1,"n":"OnPointerRelease","t":8,"sn":"OnPointerRelease","rt":$n[1].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[0].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[1].Void,"p":[$n[0].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"a":2,"n":"GameOver","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_GameOver","t":8,"rt":$n[1].Boolean,"fg":"GameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_GameOver","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"GameOver"},"fn":"GameOver"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"catRb","t":4,"rt":$n[0].Rigidbody,"sn":"catRb"},{"a":1,"n":"currentPointerPosition","t":4,"rt":$n[0].Vector2,"sn":"currentPointerPosition"},{"a":1,"n":"dragDirection","t":4,"rt":$n[0].Vector2,"sn":"dragDirection"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Threshold to Drag", 2, "Game Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dragThreshold","t":4,"rt":$n[1].Single,"sn":"dragThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"isDragging","t":4,"rt":$n[1].Boolean,"sn":"isDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"moveDirection","t":4,"rt":$n[0].Vector3,"sn":"moveDirection"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Player Move Speed", 1, "Game Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveSpeed","t":4,"rt":$n[1].Single,"sn":"moveSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"pointerPressed","t":4,"rt":$n[1].Boolean,"sn":"pointerPressed","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"startPointerPosition","t":4,"rt":$n[0].Vector2,"sn":"startPointerPosition"},{"a":1,"backing":true,"n":"<GameOver>k__BackingField","t":4,"rt":$n[1].Boolean,"sn":"GameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*CatController end.*/

    /*GuardController start.*/
    $m("GuardController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanRaycastPlayer","t":8,"pi":[{"n":"directionToPlayer","pt":$n[0].Vector3,"ps":0}],"sn":"CanRaycastPlayer","rt":$n[1].Boolean,"p":[$n[0].Vector3],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsPlayerInRange","t":8,"sn":"IsPlayerInRange","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LookForPlayer","t":8,"sn":"LookForPlayer","rt":$n[1].Void},{"a":1,"n":"MoveRoutine","t":8,"sn":"MoveRoutine","rt":$n[2].IEnumerator},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"SwitchTarget","t":8,"sn":"SwitchTarget","rt":$n[1].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"canMove","t":4,"rt":$n[1].Boolean,"sn":"canMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPoint","t":4,"rt":$n[0].Transform,"sn":"endPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"obstacleMask","t":4,"rt":$n[0].LayerMask,"sn":"obstacleMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"player","t":4,"rt":CatController,"sn":"player"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startingPoint","t":4,"rt":$n[0].Transform,"sn":"startingPoint"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startingPosition","t":4,"rt":$n[0].Vector3,"sn":"startingPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"targetPoint","t":4,"rt":$n[0].Transform,"sn":"targetPoint"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Guard Move duration to move from one to another point", 3, "Game Settings", false, null),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeDuration","t":4,"rt":$n[1].Single,"sn":"timeDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"timeElapsed","t":4,"rt":$n[1].Single,"sn":"timeElapsed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visionAngle","t":4,"rt":$n[1].Single,"sn":"visionAngle","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"visionRange","t":4,"rt":$n[1].Single,"sn":"visionRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*GuardController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
