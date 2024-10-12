using System.Collections;
using UnityEngine;

public class GuardController : MonoBehaviour
{
    [SerializeField] private Transform player;
    [SerializeField] private float visionRange = 1f;
    [SerializeField] private float visionAngle = 60f;
    [SerializeField] private LayerMask obstacleMask;
    
    [SerializeField] private Transform startingPoint;
    [SerializeField] private Transform endPoint;
    
    [SerializeField] private Vector3 startingPosition;
    [SerializeField] private Transform targetPoint;
    [SerializeField] private bool canMove;
    [SerializeField] float timeElapsed = 0f;
    [SerializeField] float timeDuration = 100f;

    private void Start()
    {
        canMove = true;
        transform.position = startingPoint.position;
        startingPosition = transform.position;
        targetPoint = endPoint;
        StartCoroutine(MoveRoutine());
    }

    private void Update()
    {
        LookForPlayer();
    }

    private IEnumerator MoveRoutine()
    {
        while (canMove)
        {
            transform.position = Vector3.Lerp(startingPosition, targetPoint.position, timeElapsed / timeDuration);
            timeElapsed += Time.deltaTime;

            if (Vector3.Distance(transform.position, targetPoint.position) <= 0.01f)
            {
                transform.position = targetPoint.position;
                SwitchTarget();
                timeElapsed = 0f;
            }
            
            yield return null;
        }
    }

    private void SwitchTarget()
    {
        if (targetPoint == startingPoint)
        {
            startingPosition = startingPoint.position;
            targetPoint = endPoint;
        }
        else if(targetPoint == endPoint)
        {
            startingPosition = endPoint.position;
            targetPoint = startingPoint;
        }
        
        transform.Rotate(Vector3.up, 180);
        // The Rotation flip above works much cleaner and for an Ad it does the job.
        
        // Quaternion lookRotation = Quaternion.LookRotation(targetPoint.position);
        // Vector3 lookRotationEulerAngles = lookRotation.eulerAngles;
        // lookRotationEulerAngles.x = 0;
        // lookRotationEulerAngles.z = 0;
        //transform.rotation = Quaternion.Euler(lookRotationEulerAngles);
    }

    private void LookForPlayer()
    {
        if (!IsPlayerInRange())
        {
            return;
        }
        
        Vector3 directionToPlayer = (player.position - transform.position).normalized;

        float angleToPlayer = Vector3.Angle(transform.forward, directionToPlayer);
        if (angleToPlayer < visionAngle / 2)
        {
            if (!CanRaycastPlayer(directionToPlayer))
            {
                Debug.Log("Player Detected!");
                canMove = false;
            }
        }
    }

    private bool IsPlayerInRange()
    {
        Collider[] hitObjects = Physics.OverlapSphere(transform.position, visionRange);
        if (hitObjects.Length == 0)
        {
            return false;
        }

        foreach (Collider hitObject in hitObjects)
        {
            if (hitObject.CompareTag("Player"))
            {
                return true;
            }
        }

        return false;
    }

    private bool CanRaycastPlayer(Vector3 directionToPlayer)
    {
        return Physics.Raycast(transform.position, directionToPlayer, out RaycastHit hit, visionRange, obstacleMask);
    }

    private void OnDrawGizmos()
    {
        Gizmos.DrawWireSphere(transform.position, visionRange);
    }
}
