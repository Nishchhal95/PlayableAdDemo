using UnityEngine;

public class TestPlayer : MonoBehaviour
{
    [SerializeField] private Rigidbody playerRb;
    [SerializeField] private float moveSpeed;
    private float input_Hor;
    private float input_Ver;
    
    private void Update()
    {
        HandleInput();
    }

    private void FixedUpdate()
    {
        MovePlayer();
    }
    
    private void HandleInput()
    {
        input_Hor = Input.GetAxis("Horizontal");
        input_Ver = Input.GetAxis("Vertical");
    }

    private void MovePlayer()
    {
        playerRb.velocity = new Vector3(input_Hor, 0, input_Ver) * (Time.fixedDeltaTime * moveSpeed);
    }
}
