var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointSpring' )
  var i255 = data
  i254.spring = i255[0]
  i254.damper = i255[1]
  i254.targetPosition = i255[2]
  return i254
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointMotor' )
  var i257 = data
  i256.m_TargetVelocity = i257[0]
  i256.m_Force = i257[1]
  i256.m_FreeSpin = i257[2]
  return i256
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointLimits' )
  var i259 = data
  i258.m_Min = i259[0]
  i258.m_Max = i259[1]
  i258.m_Bounciness = i259[2]
  i258.m_BounceMinVelocity = i259[3]
  i258.m_ContactDistance = i259[4]
  i258.minBounce = i259[5]
  i258.maxBounce = i259[6]
  return i258
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.JointDrive' )
  var i261 = data
  i260.m_PositionSpring = i261[0]
  i260.m_PositionDamper = i261[1]
  i260.m_MaximumForce = i261[2]
  i260.m_UseAcceleration = i261[3]
  return i260
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i263 = data
  i262.m_Spring = i263[0]
  i262.m_Damper = i263[1]
  return i262
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i265 = data
  i264.m_Limit = i265[0]
  i264.m_Bounciness = i265[1]
  i264.m_ContactDistance = i265[2]
  return i264
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i267 = data
  i266.m_ExtremumSlip = i267[0]
  i266.m_ExtremumValue = i267[1]
  i266.m_AsymptoteSlip = i267[2]
  i266.m_AsymptoteValue = i267[3]
  i266.m_Stiffness = i267[4]
  return i266
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i269 = data
  i268.m_LowerAngle = i269[0]
  i268.m_UpperAngle = i269[1]
  return i268
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i271 = data
  i270.m_MotorSpeed = i271[0]
  i270.m_MaximumMotorTorque = i271[1]
  return i270
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i273 = data
  i272.m_DampingRatio = i273[0]
  i272.m_Frequency = i273[1]
  i272.m_Angle = i273[2]
  return i272
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i275 = data
  i274.m_LowerTranslation = i275[0]
  i274.m_UpperTranslation = i275[1]
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i277 = data
  i276.name = i277[0]
  i276.halfPrecision = !!i277[1]
  i276.useUInt32IndexFormat = !!i277[2]
  i276.vertexCount = i277[3]
  i276.aabb = i277[4]
  var i279 = i277[5]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( !!i279[i + 0] );
  }
  i276.streams = i278
  i276.vertices = i277[6]
  var i281 = i277[7]
  var i280 = []
  for(var i = 0; i < i281.length; i += 1) {
    i280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i281[i + 0]) );
  }
  i276.subMeshes = i280
  var i283 = i277[8]
  var i282 = []
  for(var i = 0; i < i283.length; i += 16) {
    i282.push( new pc.Mat4().setData(i283[i + 0], i283[i + 1], i283[i + 2], i283[i + 3],  i283[i + 4], i283[i + 5], i283[i + 6], i283[i + 7],  i283[i + 8], i283[i + 9], i283[i + 10], i283[i + 11],  i283[i + 12], i283[i + 13], i283[i + 14], i283[i + 15]) );
  }
  i276.bindposes = i282
  var i285 = i277[9]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i285[i + 0]) );
  }
  i276.blendShapes = i284
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i291 = data
  i290.triangles = i291[0]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i297 = data
  i296.name = i297[0]
  var i299 = i297[1]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i299[i + 0]) );
  }
  i296.frames = i298
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i300 = root || new pc.UnityMaterial()
  var i301 = data
  i300.name = i301[0]
  request.r(i301[1], i301[2], 0, i300, 'shader')
  i300.renderQueue = i301[3]
  i300.enableInstancing = !!i301[4]
  var i303 = i301[5]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i303[i + 0]) );
  }
  i300.floatParameters = i302
  var i305 = i301[6]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i305[i + 0]) );
  }
  i300.colorParameters = i304
  var i307 = i301[7]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i307[i + 0]) );
  }
  i300.vectorParameters = i306
  var i309 = i301[8]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i309[i + 0]) );
  }
  i300.textureParameters = i308
  var i311 = i301[9]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i311[i + 0]) );
  }
  i300.materialFlags = i310
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = i315[1]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i319 = data
  i318.name = i319[0]
  i318.value = new pc.Color(i319[1], i319[2], i319[3], i319[4])
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i323 = data
  i322.name = i323[0]
  i322.value = new pc.Vec4( i323[1], i323[2], i323[3], i323[4] )
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i327 = data
  i326.name = i327[0]
  request.r(i327[1], i327[2], 0, i326, 'value')
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i331 = data
  i330.name = i331[0]
  i330.enabled = !!i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i333 = data
  i332.name = i333[0]
  i332.width = i333[1]
  i332.height = i333[2]
  i332.mipmapCount = i333[3]
  i332.anisoLevel = i333[4]
  i332.filterMode = i333[5]
  i332.hdr = !!i333[6]
  i332.format = i333[7]
  i332.wrapMode = i333[8]
  i332.alphaIsTransparency = !!i333[9]
  i332.alphaSource = i333[10]
  i332.graphicsFormat = i333[11]
  i332.sRGBTexture = !!i333[12]
  i332.desiredColorSpace = i333[13]
  i332.wrapU = i333[14]
  i332.wrapV = i333[15]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i335 = data
  i334.name = i335[0]
  i334.atlasId = i335[1]
  i334.mipmapCount = i335[2]
  i334.hdr = !!i335[3]
  i334.size = i335[4]
  i334.anisoLevel = i335[5]
  i334.filterMode = i335[6]
  var i337 = i335[7]
  var i336 = []
  for(var i = 0; i < i337.length; i += 4) {
    i336.push( UnityEngine.Rect.MinMaxRect(i337[i + 0], i337[i + 1], i337[i + 2], i337[i + 3]) );
  }
  i334.rects = i336
  i334.wrapU = i335[8]
  i334.wrapV = i335[9]
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i341 = data
  i340.name = i341[0]
  i340.index = i341[1]
  i340.startup = !!i341[2]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i343 = data
  i342.position = new pc.Vec3( i343[0], i343[1], i343[2] )
  i342.scale = new pc.Vec3( i343[3], i343[4], i343[5] )
  i342.rotation = new pc.Quat(i343[6], i343[7], i343[8], i343[9])
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i345 = data
  i344.enabled = !!i345[0]
  i344.aspect = i345[1]
  i344.orthographic = !!i345[2]
  i344.orthographicSize = i345[3]
  i344.backgroundColor = new pc.Color(i345[4], i345[5], i345[6], i345[7])
  i344.nearClipPlane = i345[8]
  i344.farClipPlane = i345[9]
  i344.fieldOfView = i345[10]
  i344.depth = i345[11]
  i344.clearFlags = i345[12]
  i344.cullingMask = i345[13]
  i344.rect = i345[14]
  request.r(i345[15], i345[16], 0, i344, 'targetTexture')
  i344.usePhysicalProperties = !!i345[17]
  i344.focalLength = i345[18]
  i344.sensorSize = new pc.Vec2( i345[19], i345[20] )
  i344.lensShift = new pc.Vec2( i345[21], i345[22] )
  i344.gateFit = i345[23]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i347 = data
  i346.name = i347[0]
  i346.tagId = i347[1]
  i346.enabled = !!i347[2]
  i346.isStatic = !!i347[3]
  i346.layer = i347[4]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i349 = data
  i348.enabled = !!i349[0]
  i348.type = i349[1]
  i348.color = new pc.Color(i349[2], i349[3], i349[4], i349[5])
  i348.cullingMask = i349[6]
  i348.intensity = i349[7]
  i348.range = i349[8]
  i348.spotAngle = i349[9]
  i348.shadows = i349[10]
  i348.shadowNormalBias = i349[11]
  i348.shadowBias = i349[12]
  i348.shadowStrength = i349[13]
  i348.shadowResolution = i349[14]
  i348.lightmapBakeType = i349[15]
  i348.renderMode = i349[16]
  request.r(i349[17], i349[18], 0, i348, 'cookie')
  i348.cookieSize = i349[19]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'sharedMesh')
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i353 = data
  request.r(i353[0], i353[1], 0, i352, 'additionalVertexStreams')
  i352.enabled = !!i353[2]
  request.r(i353[3], i353[4], 0, i352, 'sharedMaterial')
  var i355 = i353[5]
  var i354 = []
  for(var i = 0; i < i355.length; i += 2) {
  request.r(i355[i + 0], i355[i + 1], 2, i354, '')
  }
  i352.sharedMaterials = i354
  i352.receiveShadows = !!i353[6]
  i352.shadowCastingMode = i353[7]
  i352.sortingLayerID = i353[8]
  i352.sortingOrder = i353[9]
  i352.lightmapIndex = i353[10]
  i352.lightmapSceneIndex = i353[11]
  i352.lightmapScaleOffset = new pc.Vec4( i353[12], i353[13], i353[14], i353[15] )
  i352.lightProbeUsage = i353[16]
  i352.reflectionProbeUsage = i353[17]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i359 = data
  i358.enabled = !!i359[0]
  i358.isTrigger = !!i359[1]
  request.r(i359[2], i359[3], 0, i358, 'material')
  request.r(i359[4], i359[5], 0, i358, 'sharedMesh')
  i358.convex = !!i359[6]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i361 = data
  i360.center = new pc.Vec3( i361[0], i361[1], i361[2] )
  i360.size = new pc.Vec3( i361[3], i361[4], i361[5] )
  i360.enabled = !!i361[6]
  i360.isTrigger = !!i361[7]
  request.r(i361[8], i361[9], 0, i360, 'material')
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i363 = data
  i362.mass = i363[0]
  i362.drag = i363[1]
  i362.angularDrag = i363[2]
  i362.useGravity = !!i363[3]
  i362.isKinematic = !!i363[4]
  i362.constraints = i363[5]
  i362.maxAngularVelocity = i363[6]
  i362.collisionDetectionMode = i363[7]
  i362.interpolation = i363[8]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i365 = data
  i364.useMotor = !!i365[0]
  i364.useLimits = !!i365[1]
  i364.useSpring = !!i365[2]
  i364.limits = request.d('UnityEngine.JointLimits', i365[3], i364.limits)
  i364.motor = request.d('UnityEngine.JointMotor', i365[4], i364.motor)
  i364.spring = request.d('UnityEngine.JointSpring', i365[5], i364.spring)
  request.r(i365[6], i365[7], 0, i364, 'connectedBody')
  i364.axis = new pc.Vec3( i365[8], i365[9], i365[10] )
  i364.anchor = new pc.Vec3( i365[11], i365[12], i365[13] )
  i364.connectedAnchor = new pc.Vec3( i365[14], i365[15], i365[16] )
  i364.autoConfigureConnectedAnchor = !!i365[17]
  i364.massScale = i365[18]
  i364.connectedMassScale = i365[19]
  i364.enableCollision = !!i365[20]
  i364.breakForce = i365[21]
  i364.breakTorque = i365[22]
  return i364
}

Deserializers["CatController"] = function (request, data, root) {
  var i366 = root || request.c( 'CatController' )
  var i367 = data
  request.r(i367[0], i367[1], 0, i366, 'catRb')
  i366.dragThreshold = i367[2]
  i366.moveSpeed = i367[3]
  return i366
}

Deserializers["GuardController"] = function (request, data, root) {
  var i368 = root || request.c( 'GuardController' )
  var i369 = data
  request.r(i369[0], i369[1], 0, i368, 'player')
  i368.visionRange = i369[2]
  i368.visionAngle = i369[3]
  i368.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i369[4] )
  request.r(i369[5], i369[6], 0, i368, 'startingPoint')
  request.r(i369[7], i369[8], 0, i368, 'endPoint')
  i368.startingPosition = new pc.Vec3( i369[9], i369[10], i369[11] )
  request.r(i369[12], i369[13], 0, i368, 'targetPoint')
  i368.canMove = !!i369[14]
  i368.timeElapsed = i369[15]
  i368.timeDuration = i369[16]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i371 = data
  i370.ambientIntensity = i371[0]
  i370.reflectionIntensity = i371[1]
  i370.ambientMode = i371[2]
  i370.ambientLight = new pc.Color(i371[3], i371[4], i371[5], i371[6])
  i370.ambientSkyColor = new pc.Color(i371[7], i371[8], i371[9], i371[10])
  i370.ambientGroundColor = new pc.Color(i371[11], i371[12], i371[13], i371[14])
  i370.ambientEquatorColor = new pc.Color(i371[15], i371[16], i371[17], i371[18])
  i370.fogColor = new pc.Color(i371[19], i371[20], i371[21], i371[22])
  i370.fogEndDistance = i371[23]
  i370.fogStartDistance = i371[24]
  i370.fogDensity = i371[25]
  i370.fog = !!i371[26]
  request.r(i371[27], i371[28], 0, i370, 'skybox')
  i370.fogMode = i371[29]
  var i373 = i371[30]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i373[i + 0]) );
  }
  i370.lightmaps = i372
  i370.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i371[31], i370.lightProbes)
  i370.lightmapsMode = i371[32]
  i370.mixedBakeMode = i371[33]
  i370.environmentLightingMode = i371[34]
  i370.ambientProbe = new pc.SphericalHarmonicsL2(i371[35])
  i370.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i371[36])
  i370.useReferenceAmbientProbe = !!i371[37]
  request.r(i371[38], i371[39], 0, i370, 'customReflection')
  request.r(i371[40], i371[41], 0, i370, 'defaultReflection')
  i370.defaultReflectionMode = i371[42]
  i370.defaultReflectionResolution = i371[43]
  i370.sunLightObjectId = i371[44]
  i370.pixelLightCount = i371[45]
  i370.defaultReflectionHDR = !!i371[46]
  i370.hasLightDataAsset = !!i371[47]
  i370.hasManualGenerate = !!i371[48]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, 'lightmapColor')
  request.r(i377[2], i377[3], 0, i376, 'lightmapDirection')
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i378 = root || new UnityEngine.LightProbes()
  var i379 = data
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i387 = data
  var i389 = i387[0]
  var i388 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i389.length; i += 1) {
    i388.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i389[i + 0]));
  }
  i386.ShaderCompilationErrors = i388
  i386.name = i387[1]
  i386.guid = i387[2]
  var i391 = i387[3]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( i391[i + 0] );
  }
  i386.shaderDefinedKeywords = i390
  var i393 = i387[4]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i393[i + 0]) );
  }
  i386.passes = i392
  var i395 = i387[5]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i395[i + 0]) );
  }
  i386.usePasses = i394
  var i397 = i387[6]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i397[i + 0]) );
  }
  i386.defaultParameterValues = i396
  request.r(i387[7], i387[8], 0, i386, 'unityFallbackShader')
  i386.readDepth = !!i387[9]
  i386.isCreatedByShaderGraph = !!i387[10]
  i386.usedBatchUniforms = i387[11]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i401 = data
  i400.shaderName = i401[0]
  i400.errorMessage = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i406 = root || new pc.UnityShaderPass()
  var i407 = data
  i406.id = i407[0]
  i406.subShaderIndex = i407[1]
  i406.name = i407[2]
  i406.passType = i407[3]
  i406.grabPassTextureName = i407[4]
  i406.usePass = !!i407[5]
  i406.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[6], i406.zTest)
  i406.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[7], i406.zWrite)
  i406.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[8], i406.culling)
  i406.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i407[9], i406.blending)
  i406.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i407[10], i406.alphaBlending)
  i406.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[11], i406.colorWriteMask)
  i406.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[12], i406.offsetUnits)
  i406.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[13], i406.offsetFactor)
  i406.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[14], i406.stencilRef)
  i406.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[15], i406.stencilReadMask)
  i406.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[16], i406.stencilWriteMask)
  i406.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[17], i406.stencilOp)
  i406.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[18], i406.stencilOpFront)
  i406.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i407[19], i406.stencilOpBack)
  var i409 = i407[20]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i409[i + 0]) );
  }
  i406.tags = i408
  var i411 = i407[21]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( i411[i + 0] );
  }
  i406.passDefinedKeywords = i410
  var i413 = i407[22]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i413[i + 0]) );
  }
  i406.passDefinedKeywordGroups = i412
  var i415 = i407[23]
  var i414 = []
  for(var i = 0; i < i415.length; i += 1) {
    i414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i415[i + 0]) );
  }
  i406.variants = i414
  var i417 = i407[24]
  var i416 = []
  for(var i = 0; i < i417.length; i += 1) {
    i416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i417[i + 0]) );
  }
  i406.excludedVariants = i416
  i406.hasDepthReader = !!i407[25]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i419 = data
  i418.val = i419[0]
  i418.name = i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i421 = data
  i420.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i421[0], i420.src)
  i420.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i421[1], i420.dst)
  i420.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i421[2], i420.op)
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i423 = data
  i422.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[0], i422.pass)
  i422.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[1], i422.fail)
  i422.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[2], i422.zFail)
  i422.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i423[3], i422.comp)
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i427 = data
  i426.name = i427[0]
  i426.value = i427[1]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i431 = data
  var i433 = i431[0]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i430.keywords = i432
  i430.hasDiscard = !!i431[1]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i437 = data
  i436.passId = i437[0]
  i436.subShaderIndex = i437[1]
  var i439 = i437[2]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( i439[i + 0] );
  }
  i436.keywords = i438
  i436.vertexProgram = i437[3]
  i436.fragmentProgram = i437[4]
  i436.compiledForWebGL2 = !!i437[5]
  i436.readDepth = !!i437[6]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'shader')
  i442.pass = i443[2]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i447 = data
  i446.name = i447[0]
  i446.type = i447[1]
  i446.value = new pc.Vec4( i447[2], i447[3], i447[4], i447[5] )
  i446.textureValue = i447[6]
  i446.shaderPropertyFlag = i447[7]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i449 = data
  var i451 = i449[0]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i451[i + 0]) );
  }
  i448.files = i450
  i448.componentToPrefabIds = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i455 = data
  i454.path = i455[0]
  request.r(i455[1], i455[2], 0, i454, 'unityObject')
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i459[i + 0]) );
  }
  i456.scriptsExecutionOrder = i458
  var i461 = i457[1]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i461[i + 0]) );
  }
  i456.sortingLayers = i460
  var i463 = i457[2]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i463[i + 0]) );
  }
  i456.cullingLayers = i462
  i456.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i457[3], i456.timeSettings)
  i456.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i457[4], i456.physicsSettings)
  i456.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i457[5], i456.physics2DSettings)
  i456.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i457[6], i456.qualitySettings)
  i456.enableRealtimeShadows = !!i457[7]
  i456.enableAutoInstancing = !!i457[8]
  i456.enableDynamicBatching = !!i457[9]
  i456.lightmapEncodingQuality = i457[10]
  i456.desiredColorSpace = i457[11]
  var i465 = i457[12]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i456.allTags = i464
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i473 = data
  i472.id = i473[0]
  i472.name = i473[1]
  i472.value = i473[2]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i477 = data
  i476.id = i477[0]
  i476.name = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i479 = data
  i478.fixedDeltaTime = i479[0]
  i478.maximumDeltaTime = i479[1]
  i478.timeScale = i479[2]
  i478.maximumParticleTimestep = i479[3]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i481 = data
  i480.gravity = new pc.Vec3( i481[0], i481[1], i481[2] )
  i480.defaultSolverIterations = i481[3]
  i480.bounceThreshold = i481[4]
  i480.autoSyncTransforms = !!i481[5]
  i480.autoSimulation = !!i481[6]
  var i483 = i481[7]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i483[i + 0]) );
  }
  i480.collisionMatrix = i482
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i487 = data
  i486.enabled = !!i487[0]
  i486.layerId = i487[1]
  i486.otherLayerId = i487[2]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'material')
  i488.gravity = new pc.Vec2( i489[2], i489[3] )
  i488.positionIterations = i489[4]
  i488.velocityIterations = i489[5]
  i488.velocityThreshold = i489[6]
  i488.maxLinearCorrection = i489[7]
  i488.maxAngularCorrection = i489[8]
  i488.maxTranslationSpeed = i489[9]
  i488.maxRotationSpeed = i489[10]
  i488.baumgarteScale = i489[11]
  i488.baumgarteTOIScale = i489[12]
  i488.timeToSleep = i489[13]
  i488.linearSleepTolerance = i489[14]
  i488.angularSleepTolerance = i489[15]
  i488.defaultContactOffset = i489[16]
  i488.autoSimulation = !!i489[17]
  i488.queriesHitTriggers = !!i489[18]
  i488.queriesStartInColliders = !!i489[19]
  i488.callbacksOnDisable = !!i489[20]
  i488.reuseCollisionCallbacks = !!i489[21]
  i488.autoSyncTransforms = !!i489[22]
  var i491 = i489[23]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i491[i + 0]) );
  }
  i488.collisionMatrix = i490
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.layerId = i495[1]
  i494.otherLayerId = i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i497 = data
  var i499 = i497[0]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i499[i + 0]) );
  }
  i496.qualityLevels = i498
  var i501 = i497[1]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( i501[i + 0] );
  }
  i496.names = i500
  i496.shadows = i497[2]
  i496.anisotropicFiltering = i497[3]
  i496.antiAliasing = i497[4]
  i496.lodBias = i497[5]
  i496.shadowCascades = i497[6]
  i496.shadowDistance = i497[7]
  i496.shadowmaskMode = i497[8]
  i496.shadowProjection = i497[9]
  i496.shadowResolution = i497[10]
  i496.softParticles = !!i497[11]
  i496.softVegetation = !!i497[12]
  i496.activeColorSpace = i497[13]
  i496.desiredColorSpace = i497[14]
  i496.masterTextureLimit = i497[15]
  i496.maxQueuedFrames = i497[16]
  i496.particleRaycastBudget = i497[17]
  i496.pixelLightCount = i497[18]
  i496.realtimeReflectionProbes = !!i497[19]
  i496.shadowCascade2Split = i497[20]
  i496.shadowCascade4Split = new pc.Vec3( i497[21], i497[22], i497[23] )
  i496.streamingMipmapsActive = !!i497[24]
  i496.vSyncCount = i497[25]
  i496.asyncUploadBufferSize = i497[26]
  i496.asyncUploadTimeSlice = i497[27]
  i496.billboardsFaceCameraPosition = !!i497[28]
  i496.shadowNearPlaneOffset = i497[29]
  i496.streamingMipmapsMemoryBudget = i497[30]
  i496.maximumLODLevel = i497[31]
  i496.streamingMipmapsAddAllCameras = !!i497[32]
  i496.streamingMipmapsMaxLevelReduction = i497[33]
  i496.streamingMipmapsRenderersPerFrame = i497[34]
  i496.resolutionScalingFixedDPIFactor = i497[35]
  i496.streamingMipmapsMaxFileIORequests = i497[36]
  i496.currentQualityLevel = i497[37]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i507 = data
  i506.weight = i507[0]
  i506.vertices = i507[1]
  i506.normals = i507[2]
  i506.tangents = i507[3]
  return i506
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"17":[18],"19":[18],"20":[18],"21":[18],"22":[18],"23":[18],"24":[25],"26":[2],"27":[11],"28":[11],"12":[11],"29":[11],"30":[11],"31":[11],"32":[11],"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[34],"41":[34],"42":[34],"43":[34],"44":[34],"45":[34],"46":[34],"47":[2],"48":[7],"49":[50],"51":[50],"52":[53],"54":[55],"56":[55],"57":[53],"58":[53],"59":[52],"60":[61,53],"62":[53],"63":[52],"64":[53],"65":[53],"66":[53],"67":[53],"68":[53],"69":[53],"70":[53],"71":[53],"72":[53],"73":[61,53],"74":[53],"75":[53],"76":[53],"77":[53],"78":[61,53],"79":[53],"80":[81],"82":[81],"83":[81],"84":[81],"85":[2],"86":[2],"87":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.HingeJoint","UnityEngine.MonoBehaviour","CatController","GuardController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.33f1";

Deserializers.productName = "PlayableAdDemo";

Deserializers.lunaInitializationTime = "10/12/2024 19:09:44";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25008";

Deserializers.projectId = "d4afc2a84584c294dab5d64a56fdd13b";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1678";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2675";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.DefaultCompany.PlayableAdDemo";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "5dfb8b98-0384-4f78-bd33-baeedd55627b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

