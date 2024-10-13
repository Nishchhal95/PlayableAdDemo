var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.JointSpring' )
  var i1279 = data
  i1278.spring = i1279[0]
  i1278.damper = i1279[1]
  i1278.targetPosition = i1279[2]
  return i1278
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.JointMotor' )
  var i1281 = data
  i1280.m_TargetVelocity = i1281[0]
  i1280.m_Force = i1281[1]
  i1280.m_FreeSpin = i1281[2]
  return i1280
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.JointLimits' )
  var i1283 = data
  i1282.m_Min = i1283[0]
  i1282.m_Max = i1283[1]
  i1282.m_Bounciness = i1283[2]
  i1282.m_BounceMinVelocity = i1283[3]
  i1282.m_ContactDistance = i1283[4]
  i1282.minBounce = i1283[5]
  i1282.maxBounce = i1283[6]
  return i1282
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointDrive' )
  var i1285 = data
  i1284.m_PositionSpring = i1285[0]
  i1284.m_PositionDamper = i1285[1]
  i1284.m_MaximumForce = i1285[2]
  i1284.m_UseAcceleration = i1285[3]
  return i1284
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1287 = data
  i1286.m_Spring = i1287[0]
  i1286.m_Damper = i1287[1]
  return i1286
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1289 = data
  i1288.m_Limit = i1289[0]
  i1288.m_Bounciness = i1289[1]
  i1288.m_ContactDistance = i1289[2]
  return i1288
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1291 = data
  i1290.m_ExtremumSlip = i1291[0]
  i1290.m_ExtremumValue = i1291[1]
  i1290.m_AsymptoteSlip = i1291[2]
  i1290.m_AsymptoteValue = i1291[3]
  i1290.m_Stiffness = i1291[4]
  return i1290
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1293 = data
  i1292.m_LowerAngle = i1293[0]
  i1292.m_UpperAngle = i1293[1]
  return i1292
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1295 = data
  i1294.m_MotorSpeed = i1295[0]
  i1294.m_MaximumMotorTorque = i1295[1]
  return i1294
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1297 = data
  i1296.m_DampingRatio = i1297[0]
  i1296.m_Frequency = i1297[1]
  i1296.m_Angle = i1297[2]
  return i1296
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1299 = data
  i1298.m_LowerTranslation = i1299[0]
  i1298.m_UpperTranslation = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.halfPrecision = !!i1301[1]
  i1300.useUInt32IndexFormat = !!i1301[2]
  i1300.vertexCount = i1301[3]
  i1300.aabb = i1301[4]
  var i1303 = i1301[5]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( !!i1303[i + 0] );
  }
  i1300.streams = i1302
  i1300.vertices = i1301[6]
  var i1305 = i1301[7]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1305[i + 0]) );
  }
  i1300.subMeshes = i1304
  var i1307 = i1301[8]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 16) {
    i1306.push( new pc.Mat4().setData(i1307[i + 0], i1307[i + 1], i1307[i + 2], i1307[i + 3],  i1307[i + 4], i1307[i + 5], i1307[i + 6], i1307[i + 7],  i1307[i + 8], i1307[i + 9], i1307[i + 10], i1307[i + 11],  i1307[i + 12], i1307[i + 13], i1307[i + 14], i1307[i + 15]) );
  }
  i1300.bindposes = i1306
  var i1309 = i1301[9]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1309[i + 0]) );
  }
  i1300.blendShapes = i1308
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1315 = data
  i1314.triangles = i1315[0]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1321 = data
  i1320.name = i1321[0]
  var i1323 = i1321[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1323[i + 0]) );
  }
  i1320.frames = i1322
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1324 = root || new pc.UnityMaterial()
  var i1325 = data
  i1324.name = i1325[0]
  request.r(i1325[1], i1325[2], 0, i1324, 'shader')
  i1324.renderQueue = i1325[3]
  i1324.enableInstancing = !!i1325[4]
  var i1327 = i1325[5]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1327[i + 0]) );
  }
  i1324.floatParameters = i1326
  var i1329 = i1325[6]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1329[i + 0]) );
  }
  i1324.colorParameters = i1328
  var i1331 = i1325[7]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1331[i + 0]) );
  }
  i1324.vectorParameters = i1330
  var i1333 = i1325[8]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1333[i + 0]) );
  }
  i1324.textureParameters = i1332
  var i1335 = i1325[9]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1335[i + 0]) );
  }
  i1324.materialFlags = i1334
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.value = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1343 = data
  i1342.name = i1343[0]
  i1342.value = new pc.Color(i1343[1], i1343[2], i1343[3], i1343[4])
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1347 = data
  i1346.name = i1347[0]
  i1346.value = new pc.Vec4( i1347[1], i1347[2], i1347[3], i1347[4] )
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1351 = data
  i1350.name = i1351[0]
  request.r(i1351[1], i1351[2], 0, i1350, 'value')
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.enabled = !!i1355[1]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1357 = data
  i1356.name = i1357[0]
  i1356.width = i1357[1]
  i1356.height = i1357[2]
  i1356.mipmapCount = i1357[3]
  i1356.anisoLevel = i1357[4]
  i1356.filterMode = i1357[5]
  i1356.hdr = !!i1357[6]
  i1356.format = i1357[7]
  i1356.wrapMode = i1357[8]
  i1356.alphaIsTransparency = !!i1357[9]
  i1356.alphaSource = i1357[10]
  i1356.graphicsFormat = i1357[11]
  i1356.sRGBTexture = !!i1357[12]
  i1356.desiredColorSpace = i1357[13]
  i1356.wrapU = i1357[14]
  i1356.wrapV = i1357[15]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.atlasId = i1359[1]
  i1358.mipmapCount = i1359[2]
  i1358.hdr = !!i1359[3]
  i1358.size = i1359[4]
  i1358.anisoLevel = i1359[5]
  i1358.filterMode = i1359[6]
  var i1361 = i1359[7]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 4) {
    i1360.push( UnityEngine.Rect.MinMaxRect(i1361[i + 0], i1361[i + 1], i1361[i + 2], i1361[i + 3]) );
  }
  i1358.rects = i1360
  i1358.wrapU = i1359[8]
  i1358.wrapV = i1359[9]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1365 = data
  i1364.name = i1365[0]
  i1364.index = i1365[1]
  i1364.startup = !!i1365[2]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1367 = data
  i1366.position = new pc.Vec3( i1367[0], i1367[1], i1367[2] )
  i1366.scale = new pc.Vec3( i1367[3], i1367[4], i1367[5] )
  i1366.rotation = new pc.Quat(i1367[6], i1367[7], i1367[8], i1367[9])
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1369 = data
  i1368.enabled = !!i1369[0]
  i1368.aspect = i1369[1]
  i1368.orthographic = !!i1369[2]
  i1368.orthographicSize = i1369[3]
  i1368.backgroundColor = new pc.Color(i1369[4], i1369[5], i1369[6], i1369[7])
  i1368.nearClipPlane = i1369[8]
  i1368.farClipPlane = i1369[9]
  i1368.fieldOfView = i1369[10]
  i1368.depth = i1369[11]
  i1368.clearFlags = i1369[12]
  i1368.cullingMask = i1369[13]
  i1368.rect = i1369[14]
  request.r(i1369[15], i1369[16], 0, i1368, 'targetTexture')
  i1368.usePhysicalProperties = !!i1369[17]
  i1368.focalLength = i1369[18]
  i1368.sensorSize = new pc.Vec2( i1369[19], i1369[20] )
  i1368.lensShift = new pc.Vec2( i1369[21], i1369[22] )
  i1368.gateFit = i1369[23]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.tagId = i1371[1]
  i1370.enabled = !!i1371[2]
  i1370.isStatic = !!i1371[3]
  i1370.layer = i1371[4]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1373 = data
  i1372.enabled = !!i1373[0]
  i1372.type = i1373[1]
  i1372.color = new pc.Color(i1373[2], i1373[3], i1373[4], i1373[5])
  i1372.cullingMask = i1373[6]
  i1372.intensity = i1373[7]
  i1372.range = i1373[8]
  i1372.spotAngle = i1373[9]
  i1372.shadows = i1373[10]
  i1372.shadowNormalBias = i1373[11]
  i1372.shadowBias = i1373[12]
  i1372.shadowStrength = i1373[13]
  i1372.shadowResolution = i1373[14]
  i1372.lightmapBakeType = i1373[15]
  i1372.renderMode = i1373[16]
  request.r(i1373[17], i1373[18], 0, i1372, 'cookie')
  i1372.cookieSize = i1373[19]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'sharedMesh')
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'additionalVertexStreams')
  i1376.enabled = !!i1377[2]
  request.r(i1377[3], i1377[4], 0, i1376, 'sharedMaterial')
  var i1379 = i1377[5]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 2) {
  request.r(i1379[i + 0], i1379[i + 1], 2, i1378, '')
  }
  i1376.sharedMaterials = i1378
  i1376.receiveShadows = !!i1377[6]
  i1376.shadowCastingMode = i1377[7]
  i1376.sortingLayerID = i1377[8]
  i1376.sortingOrder = i1377[9]
  i1376.lightmapIndex = i1377[10]
  i1376.lightmapSceneIndex = i1377[11]
  i1376.lightmapScaleOffset = new pc.Vec4( i1377[12], i1377[13], i1377[14], i1377[15] )
  i1376.lightProbeUsage = i1377[16]
  i1376.reflectionProbeUsage = i1377[17]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1383 = data
  i1382.enabled = !!i1383[0]
  i1382.isTrigger = !!i1383[1]
  request.r(i1383[2], i1383[3], 0, i1382, 'material')
  request.r(i1383[4], i1383[5], 0, i1382, 'sharedMesh')
  i1382.convex = !!i1383[6]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1385 = data
  i1384.center = new pc.Vec3( i1385[0], i1385[1], i1385[2] )
  i1384.size = new pc.Vec3( i1385[3], i1385[4], i1385[5] )
  i1384.enabled = !!i1385[6]
  i1384.isTrigger = !!i1385[7]
  request.r(i1385[8], i1385[9], 0, i1384, 'material')
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1387 = data
  i1386.mass = i1387[0]
  i1386.drag = i1387[1]
  i1386.angularDrag = i1387[2]
  i1386.useGravity = !!i1387[3]
  i1386.isKinematic = !!i1387[4]
  i1386.constraints = i1387[5]
  i1386.maxAngularVelocity = i1387[6]
  i1386.collisionDetectionMode = i1387[7]
  i1386.interpolation = i1387[8]
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint' )
  var i1389 = data
  i1388.useMotor = !!i1389[0]
  i1388.useLimits = !!i1389[1]
  i1388.useSpring = !!i1389[2]
  i1388.limits = request.d('UnityEngine.JointLimits', i1389[3], i1388.limits)
  i1388.motor = request.d('UnityEngine.JointMotor', i1389[4], i1388.motor)
  i1388.spring = request.d('UnityEngine.JointSpring', i1389[5], i1388.spring)
  request.r(i1389[6], i1389[7], 0, i1388, 'connectedBody')
  i1388.axis = new pc.Vec3( i1389[8], i1389[9], i1389[10] )
  i1388.anchor = new pc.Vec3( i1389[11], i1389[12], i1389[13] )
  i1388.connectedAnchor = new pc.Vec3( i1389[14], i1389[15], i1389[16] )
  i1388.autoConfigureConnectedAnchor = !!i1389[17]
  i1388.massScale = i1389[18]
  i1388.connectedMassScale = i1389[19]
  i1388.enableCollision = !!i1389[20]
  i1388.breakForce = i1389[21]
  i1388.breakTorque = i1389[22]
  return i1388
}

Deserializers["CatController"] = function (request, data, root) {
  var i1390 = root || request.c( 'CatController' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'catRb')
  i1390.dragThreshold = i1391[2]
  i1390.moveSpeed = i1391[3]
  return i1390
}

Deserializers["GuardController"] = function (request, data, root) {
  var i1392 = root || request.c( 'GuardController' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'player')
  i1392.visionRange = i1393[2]
  i1392.visionAngle = i1393[3]
  i1392.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i1393[4] )
  request.r(i1393[5], i1393[6], 0, i1392, 'startingPoint')
  request.r(i1393[7], i1393[8], 0, i1392, 'endPoint')
  i1392.startingPosition = new pc.Vec3( i1393[9], i1393[10], i1393[11] )
  request.r(i1393[12], i1393[13], 0, i1392, 'targetPoint')
  i1392.canMove = !!i1393[14]
  i1392.timeElapsed = i1393[15]
  i1392.timeDuration = i1393[16]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1395 = data
  i1394.pivot = new pc.Vec2( i1395[0], i1395[1] )
  i1394.anchorMin = new pc.Vec2( i1395[2], i1395[3] )
  i1394.anchorMax = new pc.Vec2( i1395[4], i1395[5] )
  i1394.sizeDelta = new pc.Vec2( i1395[6], i1395[7] )
  i1394.anchoredPosition3D = new pc.Vec3( i1395[8], i1395[9], i1395[10] )
  i1394.rotation = new pc.Quat(i1395[11], i1395[12], i1395[13], i1395[14])
  i1394.scale = new pc.Vec3( i1395[15], i1395[16], i1395[17] )
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.planeDistance = i1397[1]
  i1396.referencePixelsPerUnit = i1397[2]
  i1396.isFallbackOverlay = !!i1397[3]
  i1396.renderMode = i1397[4]
  i1396.renderOrder = i1397[5]
  i1396.sortingLayerName = i1397[6]
  i1396.sortingOrder = i1397[7]
  i1396.scaleFactor = i1397[8]
  request.r(i1397[9], i1397[10], 0, i1396, 'worldCamera')
  i1396.overrideSorting = !!i1397[11]
  i1396.pixelPerfect = !!i1397[12]
  i1396.targetDisplay = i1397[13]
  i1396.overridePixelPerfect = !!i1397[14]
  return i1396
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1399 = data
  i1398.m_UiScaleMode = i1399[0]
  i1398.m_ReferencePixelsPerUnit = i1399[1]
  i1398.m_ScaleFactor = i1399[2]
  i1398.m_ReferenceResolution = new pc.Vec2( i1399[3], i1399[4] )
  i1398.m_ScreenMatchMode = i1399[5]
  i1398.m_MatchWidthOrHeight = i1399[6]
  i1398.m_PhysicalUnit = i1399[7]
  i1398.m_FallbackScreenDPI = i1399[8]
  i1398.m_DefaultSpriteDPI = i1399[9]
  i1398.m_DynamicPixelsPerUnit = i1399[10]
  i1398.m_PresetInfoIsWorld = !!i1399[11]
  return i1398
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1401 = data
  i1400.m_IgnoreReversedGraphics = !!i1401[0]
  i1400.m_BlockingObjects = i1401[1]
  i1400.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1401[2] )
  return i1400
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1402 = root || request.c( 'UIManager' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'downloadNowButton')
  request.r(i1403[2], i1403[3], 0, i1402, 'catController')
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1405 = data
  i1404.cullTransparentMesh = !!i1405[0]
  return i1404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.UI.Image' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'm_Sprite')
  i1406.m_Type = i1407[2]
  i1406.m_PreserveAspect = !!i1407[3]
  i1406.m_FillCenter = !!i1407[4]
  i1406.m_FillMethod = i1407[5]
  i1406.m_FillAmount = i1407[6]
  i1406.m_FillClockwise = !!i1407[7]
  i1406.m_FillOrigin = i1407[8]
  i1406.m_UseSpriteMesh = !!i1407[9]
  i1406.m_PixelsPerUnitMultiplier = i1407[10]
  request.r(i1407[11], i1407[12], 0, i1406, 'm_Material')
  i1406.m_Maskable = !!i1407[13]
  i1406.m_Color = new pc.Color(i1407[14], i1407[15], i1407[16], i1407[17])
  i1406.m_RaycastTarget = !!i1407[18]
  i1406.m_RaycastPadding = new pc.Vec4( i1407[19], i1407[20], i1407[21], i1407[22] )
  return i1406
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.UI.Button' )
  var i1409 = data
  i1408.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1409[0], i1408.m_OnClick)
  i1408.m_Navigation = request.d('UnityEngine.UI.Navigation', i1409[1], i1408.m_Navigation)
  i1408.m_Transition = i1409[2]
  i1408.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1409[3], i1408.m_Colors)
  i1408.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1409[4], i1408.m_SpriteState)
  i1408.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1409[5], i1408.m_AnimationTriggers)
  i1408.m_Interactable = !!i1409[6]
  request.r(i1409[7], i1409[8], 0, i1408, 'm_TargetGraphic')
  return i1408
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1410 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1411 = data
  i1410.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1411[0], i1410.m_PersistentCalls)
  return i1410
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1412 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1413 = data
  var i1415 = i1413[0]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.add(request.d('UnityEngine.Events.PersistentCall', i1415[i + 0]));
  }
  i1412.m_Calls = i1414
  return i1412
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1419 = data
  request.r(i1419[0], i1419[1], 0, i1418, 'm_Target')
  i1418.m_TargetAssemblyTypeName = i1419[2]
  i1418.m_MethodName = i1419[3]
  i1418.m_Mode = i1419[4]
  i1418.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1419[5], i1418.m_Arguments)
  i1418.m_CallState = i1419[6]
  return i1418
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1421 = data
  i1420.m_Mode = i1421[0]
  i1420.m_WrapAround = !!i1421[1]
  request.r(i1421[2], i1421[3], 0, i1420, 'm_SelectOnUp')
  request.r(i1421[4], i1421[5], 0, i1420, 'm_SelectOnDown')
  request.r(i1421[6], i1421[7], 0, i1420, 'm_SelectOnLeft')
  request.r(i1421[8], i1421[9], 0, i1420, 'm_SelectOnRight')
  return i1420
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1423 = data
  i1422.m_NormalColor = new pc.Color(i1423[0], i1423[1], i1423[2], i1423[3])
  i1422.m_HighlightedColor = new pc.Color(i1423[4], i1423[5], i1423[6], i1423[7])
  i1422.m_PressedColor = new pc.Color(i1423[8], i1423[9], i1423[10], i1423[11])
  i1422.m_SelectedColor = new pc.Color(i1423[12], i1423[13], i1423[14], i1423[15])
  i1422.m_DisabledColor = new pc.Color(i1423[16], i1423[17], i1423[18], i1423[19])
  i1422.m_ColorMultiplier = i1423[20]
  i1422.m_FadeDuration = i1423[21]
  return i1422
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1425 = data
  request.r(i1425[0], i1425[1], 0, i1424, 'm_HighlightedSprite')
  request.r(i1425[2], i1425[3], 0, i1424, 'm_PressedSprite')
  request.r(i1425[4], i1425[5], 0, i1424, 'm_SelectedSprite')
  request.r(i1425[6], i1425[7], 0, i1424, 'm_DisabledSprite')
  return i1424
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1427 = data
  i1426.m_NormalTrigger = i1427[0]
  i1426.m_HighlightedTrigger = i1427[1]
  i1426.m_PressedTrigger = i1427[2]
  i1426.m_SelectedTrigger = i1427[3]
  i1426.m_DisabledTrigger = i1427[4]
  return i1426
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1428 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1429 = data
  i1428.m_hasFontAssetChanged = !!i1429[0]
  request.r(i1429[1], i1429[2], 0, i1428, 'm_baseMaterial')
  i1428.m_maskOffset = new pc.Vec4( i1429[3], i1429[4], i1429[5], i1429[6] )
  i1428.m_text = i1429[7]
  i1428.m_isRightToLeft = !!i1429[8]
  request.r(i1429[9], i1429[10], 0, i1428, 'm_fontAsset')
  request.r(i1429[11], i1429[12], 0, i1428, 'm_sharedMaterial')
  var i1431 = i1429[13]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 2) {
  request.r(i1431[i + 0], i1431[i + 1], 2, i1430, '')
  }
  i1428.m_fontSharedMaterials = i1430
  request.r(i1429[14], i1429[15], 0, i1428, 'm_fontMaterial')
  var i1433 = i1429[16]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 2) {
  request.r(i1433[i + 0], i1433[i + 1], 2, i1432, '')
  }
  i1428.m_fontMaterials = i1432
  i1428.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1429[17], i1429[18], i1429[19], i1429[20])
  i1428.m_fontColor = new pc.Color(i1429[21], i1429[22], i1429[23], i1429[24])
  i1428.m_enableVertexGradient = !!i1429[25]
  i1428.m_colorMode = i1429[26]
  i1428.m_fontColorGradient = request.d('TMPro.VertexGradient', i1429[27], i1428.m_fontColorGradient)
  request.r(i1429[28], i1429[29], 0, i1428, 'm_fontColorGradientPreset')
  request.r(i1429[30], i1429[31], 0, i1428, 'm_spriteAsset')
  i1428.m_tintAllSprites = !!i1429[32]
  request.r(i1429[33], i1429[34], 0, i1428, 'm_StyleSheet')
  i1428.m_TextStyleHashCode = i1429[35]
  i1428.m_overrideHtmlColors = !!i1429[36]
  i1428.m_faceColor = UnityEngine.Color32.ConstructColor(i1429[37], i1429[38], i1429[39], i1429[40])
  i1428.m_fontSize = i1429[41]
  i1428.m_fontSizeBase = i1429[42]
  i1428.m_fontWeight = i1429[43]
  i1428.m_enableAutoSizing = !!i1429[44]
  i1428.m_fontSizeMin = i1429[45]
  i1428.m_fontSizeMax = i1429[46]
  i1428.m_fontStyle = i1429[47]
  i1428.m_HorizontalAlignment = i1429[48]
  i1428.m_VerticalAlignment = i1429[49]
  i1428.m_textAlignment = i1429[50]
  i1428.m_characterSpacing = i1429[51]
  i1428.m_wordSpacing = i1429[52]
  i1428.m_lineSpacing = i1429[53]
  i1428.m_lineSpacingMax = i1429[54]
  i1428.m_paragraphSpacing = i1429[55]
  i1428.m_charWidthMaxAdj = i1429[56]
  i1428.m_enableWordWrapping = !!i1429[57]
  i1428.m_wordWrappingRatios = i1429[58]
  i1428.m_overflowMode = i1429[59]
  request.r(i1429[60], i1429[61], 0, i1428, 'm_linkedTextComponent')
  request.r(i1429[62], i1429[63], 0, i1428, 'parentLinkedComponent')
  i1428.m_enableKerning = !!i1429[64]
  i1428.m_enableExtraPadding = !!i1429[65]
  i1428.checkPaddingRequired = !!i1429[66]
  i1428.m_isRichText = !!i1429[67]
  i1428.m_parseCtrlCharacters = !!i1429[68]
  i1428.m_isOrthographic = !!i1429[69]
  i1428.m_isCullingEnabled = !!i1429[70]
  i1428.m_horizontalMapping = i1429[71]
  i1428.m_verticalMapping = i1429[72]
  i1428.m_uvLineOffset = i1429[73]
  i1428.m_geometrySortingOrder = i1429[74]
  i1428.m_IsTextObjectScaleStatic = !!i1429[75]
  i1428.m_VertexBufferAutoSizeReduction = !!i1429[76]
  i1428.m_useMaxVisibleDescender = !!i1429[77]
  i1428.m_pageToDisplay = i1429[78]
  i1428.m_margin = new pc.Vec4( i1429[79], i1429[80], i1429[81], i1429[82] )
  i1428.m_isUsingLegacyAnimationComponent = !!i1429[83]
  i1428.m_isVolumetricText = !!i1429[84]
  request.r(i1429[85], i1429[86], 0, i1428, 'm_Material')
  i1428.m_Maskable = !!i1429[87]
  i1428.m_Color = new pc.Color(i1429[88], i1429[89], i1429[90], i1429[91])
  i1428.m_RaycastTarget = !!i1429[92]
  i1428.m_RaycastPadding = new pc.Vec4( i1429[93], i1429[94], i1429[95], i1429[96] )
  return i1428
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1434 = root || request.c( 'TMPro.VertexGradient' )
  var i1435 = data
  i1434.topLeft = new pc.Color(i1435[0], i1435[1], i1435[2], i1435[3])
  i1434.topRight = new pc.Color(i1435[4], i1435[5], i1435[6], i1435[7])
  i1434.bottomLeft = new pc.Color(i1435[8], i1435[9], i1435[10], i1435[11])
  i1434.bottomRight = new pc.Color(i1435[12], i1435[13], i1435[14], i1435[15])
  return i1434
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1437 = data
  request.r(i1437[0], i1437[1], 0, i1436, 'm_FirstSelected')
  i1436.m_sendNavigationEvents = !!i1437[2]
  i1436.m_DragThreshold = i1437[3]
  return i1436
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1439 = data
  i1438.m_HorizontalAxis = i1439[0]
  i1438.m_VerticalAxis = i1439[1]
  i1438.m_SubmitButton = i1439[2]
  i1438.m_CancelButton = i1439[3]
  i1438.m_InputActionsPerSecond = i1439[4]
  i1438.m_RepeatDelay = i1439[5]
  i1438.m_ForceModuleActive = !!i1439[6]
  i1438.m_SendPointerHoverToParent = !!i1439[7]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1441 = data
  i1440.ambientIntensity = i1441[0]
  i1440.reflectionIntensity = i1441[1]
  i1440.ambientMode = i1441[2]
  i1440.ambientLight = new pc.Color(i1441[3], i1441[4], i1441[5], i1441[6])
  i1440.ambientSkyColor = new pc.Color(i1441[7], i1441[8], i1441[9], i1441[10])
  i1440.ambientGroundColor = new pc.Color(i1441[11], i1441[12], i1441[13], i1441[14])
  i1440.ambientEquatorColor = new pc.Color(i1441[15], i1441[16], i1441[17], i1441[18])
  i1440.fogColor = new pc.Color(i1441[19], i1441[20], i1441[21], i1441[22])
  i1440.fogEndDistance = i1441[23]
  i1440.fogStartDistance = i1441[24]
  i1440.fogDensity = i1441[25]
  i1440.fog = !!i1441[26]
  request.r(i1441[27], i1441[28], 0, i1440, 'skybox')
  i1440.fogMode = i1441[29]
  var i1443 = i1441[30]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1443[i + 0]) );
  }
  i1440.lightmaps = i1442
  i1440.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1441[31], i1440.lightProbes)
  i1440.lightmapsMode = i1441[32]
  i1440.mixedBakeMode = i1441[33]
  i1440.environmentLightingMode = i1441[34]
  i1440.ambientProbe = new pc.SphericalHarmonicsL2(i1441[35])
  i1440.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1441[36])
  i1440.useReferenceAmbientProbe = !!i1441[37]
  request.r(i1441[38], i1441[39], 0, i1440, 'customReflection')
  request.r(i1441[40], i1441[41], 0, i1440, 'defaultReflection')
  i1440.defaultReflectionMode = i1441[42]
  i1440.defaultReflectionResolution = i1441[43]
  i1440.sunLightObjectId = i1441[44]
  i1440.pixelLightCount = i1441[45]
  i1440.defaultReflectionHDR = !!i1441[46]
  i1440.hasLightDataAsset = !!i1441[47]
  i1440.hasManualGenerate = !!i1441[48]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'lightmapColor')
  request.r(i1447[2], i1447[3], 0, i1446, 'lightmapDirection')
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1448 = root || new UnityEngine.LightProbes()
  var i1449 = data
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1457 = data
  var i1459 = i1457[0]
  var i1458 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1459[i + 0]));
  }
  i1456.ShaderCompilationErrors = i1458
  i1456.name = i1457[1]
  i1456.guid = i1457[2]
  var i1461 = i1457[3]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( i1461[i + 0] );
  }
  i1456.shaderDefinedKeywords = i1460
  var i1463 = i1457[4]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1463[i + 0]) );
  }
  i1456.passes = i1462
  var i1465 = i1457[5]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1465[i + 0]) );
  }
  i1456.usePasses = i1464
  var i1467 = i1457[6]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1467[i + 0]) );
  }
  i1456.defaultParameterValues = i1466
  request.r(i1457[7], i1457[8], 0, i1456, 'unityFallbackShader')
  i1456.readDepth = !!i1457[9]
  i1456.isCreatedByShaderGraph = !!i1457[10]
  i1456.usedBatchUniforms = i1457[11]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1471 = data
  i1470.shaderName = i1471[0]
  i1470.errorMessage = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1476 = root || new pc.UnityShaderPass()
  var i1477 = data
  i1476.id = i1477[0]
  i1476.subShaderIndex = i1477[1]
  i1476.name = i1477[2]
  i1476.passType = i1477[3]
  i1476.grabPassTextureName = i1477[4]
  i1476.usePass = !!i1477[5]
  i1476.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[6], i1476.zTest)
  i1476.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[7], i1476.zWrite)
  i1476.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[8], i1476.culling)
  i1476.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1477[9], i1476.blending)
  i1476.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1477[10], i1476.alphaBlending)
  i1476.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[11], i1476.colorWriteMask)
  i1476.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[12], i1476.offsetUnits)
  i1476.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[13], i1476.offsetFactor)
  i1476.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[14], i1476.stencilRef)
  i1476.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[15], i1476.stencilReadMask)
  i1476.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1477[16], i1476.stencilWriteMask)
  i1476.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1477[17], i1476.stencilOp)
  i1476.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1477[18], i1476.stencilOpFront)
  i1476.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1477[19], i1476.stencilOpBack)
  var i1479 = i1477[20]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1479[i + 0]) );
  }
  i1476.tags = i1478
  var i1481 = i1477[21]
  var i1480 = []
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.push( i1481[i + 0] );
  }
  i1476.passDefinedKeywords = i1480
  var i1483 = i1477[22]
  var i1482 = []
  for(var i = 0; i < i1483.length; i += 1) {
    i1482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1483[i + 0]) );
  }
  i1476.passDefinedKeywordGroups = i1482
  var i1485 = i1477[23]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1485[i + 0]) );
  }
  i1476.variants = i1484
  var i1487 = i1477[24]
  var i1486 = []
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1487[i + 0]) );
  }
  i1476.excludedVariants = i1486
  i1476.hasDepthReader = !!i1477[25]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1489 = data
  i1488.val = i1489[0]
  i1488.name = i1489[1]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1491 = data
  i1490.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[0], i1490.src)
  i1490.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[1], i1490.dst)
  i1490.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1491[2], i1490.op)
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1493 = data
  i1492.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[0], i1492.pass)
  i1492.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[1], i1492.fail)
  i1492.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[2], i1492.zFail)
  i1492.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1493[3], i1492.comp)
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1497 = data
  i1496.name = i1497[0]
  i1496.value = i1497[1]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1501 = data
  var i1503 = i1501[0]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( i1503[i + 0] );
  }
  i1500.keywords = i1502
  i1500.hasDiscard = !!i1501[1]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1507 = data
  i1506.passId = i1507[0]
  i1506.subShaderIndex = i1507[1]
  var i1509 = i1507[2]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( i1509[i + 0] );
  }
  i1506.keywords = i1508
  i1506.vertexProgram = i1507[3]
  i1506.fragmentProgram = i1507[4]
  i1506.compiledForWebGL2 = !!i1507[5]
  i1506.readDepth = !!i1507[6]
  return i1506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1513 = data
  request.r(i1513[0], i1513[1], 0, i1512, 'shader')
  i1512.pass = i1513[2]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1517 = data
  i1516.name = i1517[0]
  i1516.type = i1517[1]
  i1516.value = new pc.Vec4( i1517[2], i1517[3], i1517[4], i1517[5] )
  i1516.textureValue = i1517[6]
  i1516.shaderPropertyFlag = i1517[7]
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1519 = data
  i1518.name = i1519[0]
  request.r(i1519[1], i1519[2], 0, i1518, 'texture')
  i1518.aabb = i1519[3]
  i1518.vertices = i1519[4]
  i1518.triangles = i1519[5]
  i1518.textureRect = UnityEngine.Rect.MinMaxRect(i1519[6], i1519[7], i1519[8], i1519[9])
  i1518.packedRect = UnityEngine.Rect.MinMaxRect(i1519[10], i1519[11], i1519[12], i1519[13])
  i1518.border = new pc.Vec4( i1519[14], i1519[15], i1519[16], i1519[17] )
  i1518.transparency = i1519[18]
  i1518.bounds = i1519[19]
  i1518.pixelsPerUnit = i1519[20]
  i1518.textureWidth = i1519[21]
  i1518.textureHeight = i1519[22]
  i1518.nativeSize = new pc.Vec2( i1519[23], i1519[24] )
  i1518.pivot = new pc.Vec2( i1519[25], i1519[26] )
  i1518.textureRectOffset = new pc.Vec2( i1519[27], i1519[28] )
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1521 = data
  i1520.name = i1521[0]
  i1520.ascent = i1521[1]
  i1520.originalLineHeight = i1521[2]
  i1520.fontSize = i1521[3]
  var i1523 = i1521[4]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1523[i + 0]) );
  }
  i1520.characterInfo = i1522
  request.r(i1521[5], i1521[6], 0, i1520, 'texture')
  i1520.originalFontSize = i1521[7]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1527 = data
  i1526.index = i1527[0]
  i1526.advance = i1527[1]
  i1526.bearing = i1527[2]
  i1526.glyphWidth = i1527[3]
  i1526.glyphHeight = i1527[4]
  i1526.minX = i1527[5]
  i1526.maxX = i1527[6]
  i1526.minY = i1527[7]
  i1526.maxY = i1527[8]
  i1526.uvBottomLeftX = i1527[9]
  i1526.uvBottomLeftY = i1527[10]
  i1526.uvBottomRightX = i1527[11]
  i1526.uvBottomRightY = i1527[12]
  i1526.uvTopLeftX = i1527[13]
  i1526.uvTopLeftY = i1527[14]
  i1526.uvTopRightX = i1527[15]
  i1526.uvTopRightY = i1527[16]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.bytes64 = i1529[1]
  i1528.data = i1529[2]
  return i1528
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1530 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1531 = data
  i1530.hashCode = i1531[0]
  request.r(i1531[1], i1531[2], 0, i1530, 'material')
  i1530.materialHashCode = i1531[3]
  request.r(i1531[4], i1531[5], 0, i1530, 'atlas')
  i1530.normalStyle = i1531[6]
  i1530.normalSpacingOffset = i1531[7]
  i1530.boldStyle = i1531[8]
  i1530.boldSpacing = i1531[9]
  i1530.italicStyle = i1531[10]
  i1530.tabSize = i1531[11]
  i1530.m_Version = i1531[12]
  i1530.m_SourceFontFileGUID = i1531[13]
  request.r(i1531[14], i1531[15], 0, i1530, 'm_SourceFontFile_EditorRef')
  request.r(i1531[16], i1531[17], 0, i1530, 'm_SourceFontFile')
  i1530.m_AtlasPopulationMode = i1531[18]
  i1530.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1531[19], i1530.m_FaceInfo)
  var i1533 = i1531[20]
  var i1532 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.add(request.d('UnityEngine.TextCore.Glyph', i1533[i + 0]));
  }
  i1530.m_GlyphTable = i1532
  var i1535 = i1531[21]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('TMPro.TMP_Character', i1535[i + 0]));
  }
  i1530.m_CharacterTable = i1534
  var i1537 = i1531[22]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 2) {
  request.r(i1537[i + 0], i1537[i + 1], 2, i1536, '')
  }
  i1530.m_AtlasTextures = i1536
  i1530.m_AtlasTextureIndex = i1531[23]
  i1530.m_IsMultiAtlasTexturesEnabled = !!i1531[24]
  i1530.m_ClearDynamicDataOnBuild = !!i1531[25]
  var i1539 = i1531[26]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('UnityEngine.TextCore.GlyphRect', i1539[i + 0]));
  }
  i1530.m_UsedGlyphRects = i1538
  var i1541 = i1531[27]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.add(request.d('UnityEngine.TextCore.GlyphRect', i1541[i + 0]));
  }
  i1530.m_FreeGlyphRects = i1540
  i1530.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1531[28], i1530.m_fontInfo)
  i1530.m_AtlasWidth = i1531[29]
  i1530.m_AtlasHeight = i1531[30]
  i1530.m_AtlasPadding = i1531[31]
  i1530.m_AtlasRenderMode = i1531[32]
  var i1543 = i1531[33]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('TMPro.TMP_Glyph', i1543[i + 0]));
  }
  i1530.m_glyphInfoList = i1542
  i1530.m_KerningTable = request.d('TMPro.KerningTable', i1531[34], i1530.m_KerningTable)
  i1530.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1531[35], i1530.m_FontFeatureTable)
  var i1545 = i1531[36]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1545.length; i += 2) {
  request.r(i1545[i + 0], i1545[i + 1], 1, i1544, '')
  }
  i1530.fallbackFontAssets = i1544
  var i1547 = i1531[37]
  var i1546 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1547.length; i += 2) {
  request.r(i1547[i + 0], i1547[i + 1], 1, i1546, '')
  }
  i1530.m_FallbackFontAssetTable = i1546
  i1530.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1531[38], i1530.m_CreationSettings)
  var i1549 = i1531[39]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('TMPro.TMP_FontWeightPair', i1549[i + 0]) );
  }
  i1530.m_FontWeightTable = i1548
  var i1551 = i1531[40]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('TMPro.TMP_FontWeightPair', i1551[i + 0]) );
  }
  i1530.fontWeights = i1550
  return i1530
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1553 = data
  i1552.m_FaceIndex = i1553[0]
  i1552.m_FamilyName = i1553[1]
  i1552.m_StyleName = i1553[2]
  i1552.m_PointSize = i1553[3]
  i1552.m_Scale = i1553[4]
  i1552.m_UnitsPerEM = i1553[5]
  i1552.m_LineHeight = i1553[6]
  i1552.m_AscentLine = i1553[7]
  i1552.m_CapLine = i1553[8]
  i1552.m_MeanLine = i1553[9]
  i1552.m_Baseline = i1553[10]
  i1552.m_DescentLine = i1553[11]
  i1552.m_SuperscriptOffset = i1553[12]
  i1552.m_SuperscriptSize = i1553[13]
  i1552.m_SubscriptOffset = i1553[14]
  i1552.m_SubscriptSize = i1553[15]
  i1552.m_UnderlineOffset = i1553[16]
  i1552.m_UnderlineThickness = i1553[17]
  i1552.m_StrikethroughOffset = i1553[18]
  i1552.m_StrikethroughThickness = i1553[19]
  i1552.m_TabWidth = i1553[20]
  return i1552
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1557 = data
  i1556.m_Index = i1557[0]
  i1556.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1557[1], i1556.m_Metrics)
  i1556.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1557[2], i1556.m_GlyphRect)
  i1556.m_Scale = i1557[3]
  i1556.m_AtlasIndex = i1557[4]
  i1556.m_ClassDefinitionType = i1557[5]
  return i1556
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1558 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1559 = data
  i1558.m_Width = i1559[0]
  i1558.m_Height = i1559[1]
  i1558.m_HorizontalBearingX = i1559[2]
  i1558.m_HorizontalBearingY = i1559[3]
  i1558.m_HorizontalAdvance = i1559[4]
  return i1558
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1560 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1561 = data
  i1560.m_X = i1561[0]
  i1560.m_Y = i1561[1]
  i1560.m_Width = i1561[2]
  i1560.m_Height = i1561[3]
  return i1560
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1564 = root || request.c( 'TMPro.TMP_Character' )
  var i1565 = data
  i1564.m_ElementType = i1565[0]
  i1564.m_Unicode = i1565[1]
  i1564.m_GlyphIndex = i1565[2]
  i1564.m_Scale = i1565[3]
  return i1564
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1571 = data
  i1570.Name = i1571[0]
  i1570.PointSize = i1571[1]
  i1570.Scale = i1571[2]
  i1570.CharacterCount = i1571[3]
  i1570.LineHeight = i1571[4]
  i1570.Baseline = i1571[5]
  i1570.Ascender = i1571[6]
  i1570.CapHeight = i1571[7]
  i1570.Descender = i1571[8]
  i1570.CenterLine = i1571[9]
  i1570.SuperscriptOffset = i1571[10]
  i1570.SubscriptOffset = i1571[11]
  i1570.SubSize = i1571[12]
  i1570.Underline = i1571[13]
  i1570.UnderlineThickness = i1571[14]
  i1570.strikethrough = i1571[15]
  i1570.strikethroughThickness = i1571[16]
  i1570.TabWidth = i1571[17]
  i1570.Padding = i1571[18]
  i1570.AtlasWidth = i1571[19]
  i1570.AtlasHeight = i1571[20]
  return i1570
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1575 = data
  i1574.id = i1575[0]
  i1574.x = i1575[1]
  i1574.y = i1575[2]
  i1574.width = i1575[3]
  i1574.height = i1575[4]
  i1574.xOffset = i1575[5]
  i1574.yOffset = i1575[6]
  i1574.xAdvance = i1575[7]
  i1574.scale = i1575[8]
  return i1574
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1576 = root || request.c( 'TMPro.KerningTable' )
  var i1577 = data
  var i1579 = i1577[0]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('TMPro.KerningPair', i1579[i + 0]));
  }
  i1576.kerningPairs = i1578
  return i1576
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1582 = root || request.c( 'TMPro.KerningPair' )
  var i1583 = data
  i1582.xOffset = i1583[0]
  i1582.m_FirstGlyph = i1583[1]
  i1582.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1583[2], i1582.m_FirstGlyphAdjustments)
  i1582.m_SecondGlyph = i1583[3]
  i1582.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1583[4], i1582.m_SecondGlyphAdjustments)
  i1582.m_IgnoreSpacingAdjustments = !!i1583[5]
  return i1582
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1585 = data
  var i1587 = i1585[0]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1587[i + 0]));
  }
  i1584.m_GlyphPairAdjustmentRecords = i1586
  return i1584
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1590 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1591 = data
  i1590.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1591[0], i1590.m_FirstAdjustmentRecord)
  i1590.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1591[1], i1590.m_SecondAdjustmentRecord)
  i1590.m_FeatureLookupFlags = i1591[2]
  return i1590
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1592 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1593 = data
  i1592.m_GlyphIndex = i1593[0]
  i1592.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1593[1], i1592.m_GlyphValueRecord)
  return i1592
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1595 = data
  i1594.m_XPlacement = i1595[0]
  i1594.m_YPlacement = i1595[1]
  i1594.m_XAdvance = i1595[2]
  i1594.m_YAdvance = i1595[3]
  return i1594
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1598 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1599 = data
  i1598.sourceFontFileName = i1599[0]
  i1598.sourceFontFileGUID = i1599[1]
  i1598.pointSizeSamplingMode = i1599[2]
  i1598.pointSize = i1599[3]
  i1598.padding = i1599[4]
  i1598.packingMode = i1599[5]
  i1598.atlasWidth = i1599[6]
  i1598.atlasHeight = i1599[7]
  i1598.characterSetSelectionMode = i1599[8]
  i1598.characterSequence = i1599[9]
  i1598.referencedFontAssetGUID = i1599[10]
  i1598.referencedTextAssetGUID = i1599[11]
  i1598.fontStyle = i1599[12]
  i1598.fontStyleModifier = i1599[13]
  i1598.renderMode = i1599[14]
  i1598.includeFontFeatures = !!i1599[15]
  return i1598
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1603 = data
  request.r(i1603[0], i1603[1], 0, i1602, 'regularTypeface')
  request.r(i1603[2], i1603[3], 0, i1602, 'italicTypeface')
  return i1602
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.TMP_Settings' )
  var i1605 = data
  i1604.m_enableWordWrapping = !!i1605[0]
  i1604.m_enableKerning = !!i1605[1]
  i1604.m_enableExtraPadding = !!i1605[2]
  i1604.m_enableTintAllSprites = !!i1605[3]
  i1604.m_enableParseEscapeCharacters = !!i1605[4]
  i1604.m_EnableRaycastTarget = !!i1605[5]
  i1604.m_GetFontFeaturesAtRuntime = !!i1605[6]
  i1604.m_missingGlyphCharacter = i1605[7]
  i1604.m_warningsDisabled = !!i1605[8]
  request.r(i1605[9], i1605[10], 0, i1604, 'm_defaultFontAsset')
  i1604.m_defaultFontAssetPath = i1605[11]
  i1604.m_defaultFontSize = i1605[12]
  i1604.m_defaultAutoSizeMinRatio = i1605[13]
  i1604.m_defaultAutoSizeMaxRatio = i1605[14]
  i1604.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1605[15], i1605[16] )
  i1604.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1605[17], i1605[18] )
  i1604.m_autoSizeTextContainer = !!i1605[19]
  i1604.m_IsTextObjectScaleStatic = !!i1605[20]
  var i1607 = i1605[21]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 1, i1606, '')
  }
  i1604.m_fallbackFontAssets = i1606
  i1604.m_matchMaterialPreset = !!i1605[22]
  request.r(i1605[23], i1605[24], 0, i1604, 'm_defaultSpriteAsset')
  i1604.m_defaultSpriteAssetPath = i1605[25]
  i1604.m_enableEmojiSupport = !!i1605[26]
  i1604.m_MissingCharacterSpriteUnicode = i1605[27]
  i1604.m_defaultColorGradientPresetsPath = i1605[28]
  request.r(i1605[29], i1605[30], 0, i1604, 'm_defaultStyleSheet')
  i1604.m_StyleSheetsResourcePath = i1605[31]
  request.r(i1605[32], i1605[33], 0, i1604, 'm_leadingCharacters')
  request.r(i1605[34], i1605[35], 0, i1604, 'm_followingCharacters')
  i1604.m_UseModernHangulLineBreakingRules = !!i1605[36]
  return i1604
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1609 = data
  i1608.hashCode = i1609[0]
  request.r(i1609[1], i1609[2], 0, i1608, 'material')
  i1608.materialHashCode = i1609[3]
  request.r(i1609[4], i1609[5], 0, i1608, 'spriteSheet')
  var i1611 = i1609[6]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('TMPro.TMP_Sprite', i1611[i + 0]));
  }
  i1608.spriteInfoList = i1610
  var i1613 = i1609[7]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1613.length; i += 2) {
  request.r(i1613[i + 0], i1613[i + 1], 1, i1612, '')
  }
  i1608.fallbackSpriteAssets = i1612
  i1608.m_Version = i1609[8]
  i1608.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1609[9], i1608.m_FaceInfo)
  var i1615 = i1609[10]
  var i1614 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1615.length; i += 1) {
    i1614.add(request.d('TMPro.TMP_SpriteCharacter', i1615[i + 0]));
  }
  i1608.m_SpriteCharacterTable = i1614
  var i1617 = i1609[11]
  var i1616 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1617.length; i += 1) {
    i1616.add(request.d('TMPro.TMP_SpriteGlyph', i1617[i + 0]));
  }
  i1608.m_SpriteGlyphTable = i1616
  return i1608
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1620 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1621 = data
  i1620.name = i1621[0]
  i1620.hashCode = i1621[1]
  i1620.unicode = i1621[2]
  i1620.pivot = new pc.Vec2( i1621[3], i1621[4] )
  request.r(i1621[5], i1621[6], 0, i1620, 'sprite')
  i1620.id = i1621[7]
  i1620.x = i1621[8]
  i1620.y = i1621[9]
  i1620.width = i1621[10]
  i1620.height = i1621[11]
  i1620.xOffset = i1621[12]
  i1620.yOffset = i1621[13]
  i1620.xAdvance = i1621[14]
  i1620.scale = i1621[15]
  return i1620
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1627 = data
  i1626.m_Name = i1627[0]
  i1626.m_HashCode = i1627[1]
  i1626.m_ElementType = i1627[2]
  i1626.m_Unicode = i1627[3]
  i1626.m_GlyphIndex = i1627[4]
  i1626.m_Scale = i1627[5]
  return i1626
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1630 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'sprite')
  i1630.m_Index = i1631[2]
  i1630.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1631[3], i1630.m_Metrics)
  i1630.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1631[4], i1630.m_GlyphRect)
  i1630.m_Scale = i1631[5]
  i1630.m_AtlasIndex = i1631[6]
  i1630.m_ClassDefinitionType = i1631[7]
  return i1630
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1632 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1633 = data
  var i1635 = i1633[0]
  var i1634 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.add(request.d('TMPro.TMP_Style', i1635[i + 0]));
  }
  i1632.m_StyleList = i1634
  return i1632
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1638 = root || request.c( 'TMPro.TMP_Style' )
  var i1639 = data
  i1638.m_Name = i1639[0]
  i1638.m_HashCode = i1639[1]
  i1638.m_OpeningDefinition = i1639[2]
  i1638.m_ClosingDefinition = i1639[3]
  i1638.m_OpeningTagArray = i1639[4]
  i1638.m_ClosingTagArray = i1639[5]
  i1638.m_OpeningTagUnicodeArray = i1639[6]
  i1638.m_ClosingTagUnicodeArray = i1639[7]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1641 = data
  var i1643 = i1641[0]
  var i1642 = []
  for(var i = 0; i < i1643.length; i += 1) {
    i1642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1643[i + 0]) );
  }
  i1640.files = i1642
  i1640.componentToPrefabIds = i1641[1]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1647 = data
  i1646.path = i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'unityObject')
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1649 = data
  var i1651 = i1649[0]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1651[i + 0]) );
  }
  i1648.scriptsExecutionOrder = i1650
  var i1653 = i1649[1]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1653[i + 0]) );
  }
  i1648.sortingLayers = i1652
  var i1655 = i1649[2]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1655[i + 0]) );
  }
  i1648.cullingLayers = i1654
  i1648.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1649[3], i1648.timeSettings)
  i1648.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1649[4], i1648.physicsSettings)
  i1648.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1649[5], i1648.physics2DSettings)
  i1648.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1649[6], i1648.qualitySettings)
  i1648.enableRealtimeShadows = !!i1649[7]
  i1648.enableAutoInstancing = !!i1649[8]
  i1648.enableDynamicBatching = !!i1649[9]
  i1648.lightmapEncodingQuality = i1649[10]
  i1648.desiredColorSpace = i1649[11]
  var i1657 = i1649[12]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( i1657[i + 0] );
  }
  i1648.allTags = i1656
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.value = i1661[1]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1665 = data
  i1664.id = i1665[0]
  i1664.name = i1665[1]
  i1664.value = i1665[2]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1669 = data
  i1668.id = i1669[0]
  i1668.name = i1669[1]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1671 = data
  i1670.fixedDeltaTime = i1671[0]
  i1670.maximumDeltaTime = i1671[1]
  i1670.timeScale = i1671[2]
  i1670.maximumParticleTimestep = i1671[3]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1673 = data
  i1672.gravity = new pc.Vec3( i1673[0], i1673[1], i1673[2] )
  i1672.defaultSolverIterations = i1673[3]
  i1672.bounceThreshold = i1673[4]
  i1672.autoSyncTransforms = !!i1673[5]
  i1672.autoSimulation = !!i1673[6]
  var i1675 = i1673[7]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1675[i + 0]) );
  }
  i1672.collisionMatrix = i1674
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1679 = data
  i1678.enabled = !!i1679[0]
  i1678.layerId = i1679[1]
  i1678.otherLayerId = i1679[2]
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'material')
  i1680.gravity = new pc.Vec2( i1681[2], i1681[3] )
  i1680.positionIterations = i1681[4]
  i1680.velocityIterations = i1681[5]
  i1680.velocityThreshold = i1681[6]
  i1680.maxLinearCorrection = i1681[7]
  i1680.maxAngularCorrection = i1681[8]
  i1680.maxTranslationSpeed = i1681[9]
  i1680.maxRotationSpeed = i1681[10]
  i1680.baumgarteScale = i1681[11]
  i1680.baumgarteTOIScale = i1681[12]
  i1680.timeToSleep = i1681[13]
  i1680.linearSleepTolerance = i1681[14]
  i1680.angularSleepTolerance = i1681[15]
  i1680.defaultContactOffset = i1681[16]
  i1680.autoSimulation = !!i1681[17]
  i1680.queriesHitTriggers = !!i1681[18]
  i1680.queriesStartInColliders = !!i1681[19]
  i1680.callbacksOnDisable = !!i1681[20]
  i1680.reuseCollisionCallbacks = !!i1681[21]
  i1680.autoSyncTransforms = !!i1681[22]
  var i1683 = i1681[23]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1683[i + 0]) );
  }
  i1680.collisionMatrix = i1682
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.layerId = i1687[1]
  i1686.otherLayerId = i1687[2]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1689 = data
  var i1691 = i1689[0]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1691[i + 0]) );
  }
  i1688.qualityLevels = i1690
  var i1693 = i1689[1]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( i1693[i + 0] );
  }
  i1688.names = i1692
  i1688.shadows = i1689[2]
  i1688.anisotropicFiltering = i1689[3]
  i1688.antiAliasing = i1689[4]
  i1688.lodBias = i1689[5]
  i1688.shadowCascades = i1689[6]
  i1688.shadowDistance = i1689[7]
  i1688.shadowmaskMode = i1689[8]
  i1688.shadowProjection = i1689[9]
  i1688.shadowResolution = i1689[10]
  i1688.softParticles = !!i1689[11]
  i1688.softVegetation = !!i1689[12]
  i1688.activeColorSpace = i1689[13]
  i1688.desiredColorSpace = i1689[14]
  i1688.masterTextureLimit = i1689[15]
  i1688.maxQueuedFrames = i1689[16]
  i1688.particleRaycastBudget = i1689[17]
  i1688.pixelLightCount = i1689[18]
  i1688.realtimeReflectionProbes = !!i1689[19]
  i1688.shadowCascade2Split = i1689[20]
  i1688.shadowCascade4Split = new pc.Vec3( i1689[21], i1689[22], i1689[23] )
  i1688.streamingMipmapsActive = !!i1689[24]
  i1688.vSyncCount = i1689[25]
  i1688.asyncUploadBufferSize = i1689[26]
  i1688.asyncUploadTimeSlice = i1689[27]
  i1688.billboardsFaceCameraPosition = !!i1689[28]
  i1688.shadowNearPlaneOffset = i1689[29]
  i1688.streamingMipmapsMemoryBudget = i1689[30]
  i1688.maximumLODLevel = i1689[31]
  i1688.streamingMipmapsAddAllCameras = !!i1689[32]
  i1688.streamingMipmapsMaxLevelReduction = i1689[33]
  i1688.streamingMipmapsRenderersPerFrame = i1689[34]
  i1688.resolutionScalingFixedDPIFactor = i1689[35]
  i1688.streamingMipmapsMaxFileIORequests = i1689[36]
  i1688.currentQualityLevel = i1689[37]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1699 = data
  i1698.weight = i1699[0]
  i1698.vertices = i1699[1]
  i1698.normals = i1699[2]
  i1698.tangents = i1699[3]
  return i1698
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1701 = data
  request.r(i1701[0], i1701[1], 0, i1700, 'm_ObjectArgument')
  i1700.m_ObjectArgumentAssemblyTypeName = i1701[2]
  i1700.m_IntArgument = i1701[3]
  i1700.m_FloatArgument = i1701[4]
  i1700.m_StringArgument = i1701[5]
  i1700.m_BoolArgument = !!i1701[6]
  return i1700
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1702 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1703 = data
  i1702.xPlacement = i1703[0]
  i1702.yPlacement = i1703[1]
  i1702.xAdvance = i1703[2]
  i1702.yAdvance = i1703[3]
  return i1702
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint":{"useMotor":0,"useLimits":1,"useSpring":2,"limits":3,"motor":4,"spring":5,"connectedBody":6,"axis":8,"anchor":11,"connectedAnchor":14,"autoConfigureConnectedAnchor":17,"massScale":18,"connectedMassScale":19,"enableCollision":20,"breakForce":21,"breakTorque":22},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"compiledForWebGL2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[45],"46":[3],"47":[12],"48":[12],"13":[12],"49":[12],"50":[12],"51":[12],"52":[12],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[3],"68":[8],"69":[70],"71":[70],"18":[17],"72":[73],"74":[73],"75":[17],"76":[17],"21":[18],"25":[24,17],"77":[17],"20":[18],"78":[17],"79":[17],"80":[17],"81":[17],"82":[17],"83":[17],"84":[17],"85":[17],"86":[17],"87":[24,17],"88":[17],"89":[17],"90":[17],"91":[17],"92":[24,17],"93":[17],"94":[29],"95":[29],"30":[29],"96":[29],"97":[3],"98":[3],"99":[17],"100":[8,17],"27":[17,24],"101":[17],"102":[24,17],"103":[8],"104":[24,17],"105":[17],"106":[73]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.HingeJoint","UnityEngine.MonoBehaviour","CatController","GuardController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Button","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.33f1";

Deserializers.productName = "PlayableAdDemo";

Deserializers.lunaInitializationTime = "10/12/2024 19:09:44";

Deserializers.lunaDaysRunning = "1.1";

Deserializers.lunaVersion = "6.1.1";

Deserializers.lunaSHA = "0e5fe40dac2609ba85f99b0ada986fd2fc86398d";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "25008";

Deserializers.projectId = "d4afc2a84584c294dab5d64a56fdd13b";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildID = "57e850b7-2c7e-4c61-a4c9-7e84b52a1b38";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

