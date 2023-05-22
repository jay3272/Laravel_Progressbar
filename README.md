Laravel
===

環境安裝
---
- Windows安裝PHP
    - 設定環境變數
    ![](https://hackmd.io/_uploads/ByGxl84H2.png)
    - 檢查版本`php -v`
    ![](https://hackmd.io/_uploads/HkRSeIErh.png)
    - 執行網站`php -S 127.0.0.1:8000`    
    ![](https://hackmd.io/_uploads/S1VN7LErn.png)
    - PHP設定檔 `php -i`
    ![](https://hackmd.io/_uploads/SJy4BIVrh.png)
- Window安裝Composer
    - `composer -v`
    ![](https://hackmd.io/_uploads/Hkxxv8NSh.png)
- Windows安裝Laravel
    - `composer global require laravel/installer`
    ![](https://hackmd.io/_uploads/BkHcd84Bn.png)
    - `laravel -v`
    ![](https://hackmd.io/_uploads/r1x06_IES2.png)


路由Routing與網頁前端
---
- 路由與更換首頁內容
    - 建立專案
    - `composer create-project --prefer-dist laravel/laravel pb_frontend_assets "8.*"` 
- 進入專案目錄
    - `cd pb_frontend_assets`
    - `php artisan serve`
    - ![](https://hackmd.io/_uploads/SykiXH_r2.png)
- 打開VS Code


異常排除
---
- ![](https://hackmd.io/_uploads/B11WZrOr3.png)

- `composer update --ignore-platform-req=ext-fileinfo`


