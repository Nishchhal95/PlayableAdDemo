using UnityEngine;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [SerializeField] private Button downloadNowButton;
    [SerializeField] private CatController catController;

    private void OnEnable()
    {
        downloadNowButton.onClick.AddListener(OnDownloadButtonClicked);
    }

    private void OnDisable()
    {
        downloadNowButton.onClick.RemoveListener(OnDownloadButtonClicked);
    }

    private void OnDownloadButtonClicked()
    {
        catController.GameEnd();
    }
}
