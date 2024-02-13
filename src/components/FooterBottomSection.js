function FooterBottomSection() {
    return (
        <div className='footer__bottomSection'>
                <div className='footer__bottomSection-Copy'>
                    <label className='copyright'>© SANIMALS 2024. ALL RIGHTS RESERVED</label>
                </div>
                <div className='footer__bottomSection-Payments'>
                    <label className='payments-label'>ACCEPTED PAYMENT METHODS</label>
                    <ul className='payments'>
                        <li className='payment'>
                        <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.1875 0.625C2.82281 0.625 0.875 2.57281 0.875 4.9375V25.0625C0.875 27.4272 2.82281 29.375 5.1875 29.375H36.8125C39.1772 29.375 41.125 27.4272 41.125 25.0625V4.9375C41.125 2.57281 39.1772 0.625 36.8125 0.625H5.1875ZM5.1875 3.5H36.8125C37.6247 3.5 38.25 4.12531 38.25 4.9375V25.0625C38.25 25.8747 37.6247 26.5 36.8125 26.5H5.1875C4.37531 26.5 3.75 25.8747 3.75 25.0625V4.9375C3.75 4.12531 4.37531 3.5 5.1875 3.5ZM25.8961 9.78906C23.1275 9.78906 21.6742 11.1547 21.6742 12.8883C21.6742 16.0264 25.3542 15.5908 25.3542 17.2008C25.3542 17.4783 25.1242 18.1021 23.6004 18.1021C22.0767 18.1021 21.0848 17.5631 21.0848 17.5631L20.6392 19.6331C20.6392 19.6331 21.5807 20.2153 23.4711 20.2153C25.3542 20.2153 28.0049 18.7663 28.0049 16.6646C28.0049 14.1404 24.3206 13.9736 24.3206 12.8481C24.3206 12.2731 24.8094 11.8131 26.1175 11.8131C26.9714 11.8131 27.9144 12.4887 27.9144 12.4887L28.3658 10.2893C28.3658 10.2893 27.1151 9.79338 25.8932 9.79338L25.8961 9.78906ZM14.0827 9.96875L11.6562 17.0671C11.6562 17.0671 11.5355 16.4519 11.4766 16.0781C10.1038 13.0019 7.88281 11.8548 7.88281 11.8548L9.99594 19.8961H12.8709L16.9103 9.96875H14.0856H14.0827ZM17.9453 9.96875L16.3727 19.8961H19.0263L20.5975 9.96875H17.9453ZM32.2312 9.96875L27.9187 19.8961H30.5234L31.0625 18.5046H34.3874L34.6562 19.8961H37.0368L35.0156 9.96875H32.2297H32.2312ZM4.96181 10.0119C4.96181 10.0119 10.1325 11.6003 11.3414 15.4945L10.4459 11.0023C10.4459 11.0023 10.0506 10.0104 9.00838 10.0104H4.96325L4.96181 10.0119ZM33.2188 12.8438L33.9806 16.5726H31.8244L33.2188 12.8438Z" fill="white"/>
</svg>
                        </li>
                        <li className='payment'>
                        <svg width="50" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.32655 0.75005C1.04205 0.75005 0 1.79155 0 3.0766V29.8236C0 31.1084 1.0422 32.1501 2.32655 32.1501H47.6735C48.958 32.1501 50.0001 31.1086 50.0001 29.8235V3.07655C50.0001 1.7917 48.9579 0.75 47.6735 0.75H2.3265L2.32655 0.75005ZM16.3953 4.52975C19.2494 4.52975 21.8706 5.5227 23.9281 7.1813C22.197 8.73025 20.9058 10.7653 20.2688 13.072H21.2672C21.8552 11.1691 22.9234 9.47485 24.3313 8.1313C25.7392 9.47485 26.8073 11.1691 27.3953 13.072H28.4094C27.7635 10.7775 26.4705 8.75455 24.7407 7.2157C26.8022 5.53605 29.4337 4.5297 32.3 4.5297C38.9146 4.5297 44.2766 9.8923 44.2766 16.5079C44.2766 23.1234 38.9146 28.486 32.3 28.486C29.386 28.486 26.714 27.4459 24.6375 25.7157C26.495 24.0997 27.8644 21.9333 28.4907 19.4688H27.514C26.958 21.5373 25.8388 23.3771 24.3312 24.8157C22.8237 23.3771 21.7061 21.5373 21.15 19.4688H20.2203C20.8502 21.8976 22.2017 24.0337 24.0312 25.6345C21.9585 27.3433 19.297 28.3704 16.3953 28.3704C9.78075 28.3704 4.41875 23.0336 4.41875 16.4501C4.41875 9.86655 9.78075 4.52975 16.3953 4.52975ZM31.4016 12.9501C29.9625 12.9501 28.5625 14.2082 28.5625 16.5704C28.5625 18.1368 29.3187 19.1704 30.8063 19.1704C31.2269 19.1705 31.8969 18.9985 31.8969 18.9985L32.1188 17.6298C32.1188 17.6298 31.5073 17.9391 31.0875 17.9391C30.2033 17.9391 29.8485 17.2591 29.8485 16.5282C29.8485 15.0456 30.6093 14.2297 31.4563 14.2297C32.0914 14.2297 32.6016 14.5891 32.6016 14.5891L32.8047 13.2579C32.8047 13.2579 32.0495 12.9501 31.4015 12.9501H31.4016ZM43.5 13.0657L42.2485 13.0688L41.9797 14.7157C41.9797 14.7157 41.5092 14.0766 40.7735 14.0766C39.6295 14.0766 38.6766 15.4356 38.6766 16.9985C38.6766 18.0074 39.1837 18.9969 40.2235 18.9969C40.9714 18.9969 41.386 18.4829 41.386 18.4829L41.3313 18.9219H42.5469L43.5 13.0657ZM7.6531 13.0829L6.65625 18.9532H7.8578L8.6172 14.5267L8.7297 18.9532H9.58905L11.1922 14.5267L10.4813 18.9532H11.7578L12.7422 13.0829H10.7672L9.5375 16.6844L9.47345 13.0829H7.65315L7.6531 13.0829ZM20.2063 13.4641C20.1791 13.4914 19.4797 17.5245 19.4797 18.0157C19.4797 18.743 19.8874 19.0678 20.461 19.0626C20.872 19.0591 21.1903 18.9558 21.3375 18.9126C21.3529 18.9084 21.3828 18.9001 21.3828 18.9001L21.5375 17.8501C21.4534 17.8501 21.3295 17.886 21.2203 17.886C20.7921 17.886 20.7446 17.6582 20.7719 17.4891L21.1172 15.347H21.7688L21.9266 14.186H21.3125L21.4375 13.4641H20.2063ZM34.7297 14.0548C33.8911 14.0548 33.2485 14.3313 33.2485 14.3313L33.0703 15.4095C33.0703 15.4095 33.6011 15.1891 34.4032 15.1891C34.8586 15.1891 35.1922 15.2412 35.1922 15.6204C35.1922 15.8507 35.1516 15.936 35.1516 15.936C35.1516 15.936 34.7915 15.9048 34.625 15.9048C33.5674 15.9048 32.4563 16.3683 32.4563 17.7626C32.4563 18.8612 33.1857 19.1126 33.6375 19.1126C34.5004 19.1126 34.8725 18.5393 34.8922 18.5376L34.8516 19.0157H35.9282L36.4094 15.5657C36.4096 14.1018 35.1627 14.0547 34.7297 14.0547V14.0548ZM14.5344 14.061C13.6927 14.061 13.0469 14.3376 13.0469 14.3376L12.8688 15.4157C12.8688 15.4157 13.4013 15.1954 14.2063 15.1954C14.6634 15.1954 14.9985 15.2477 14.9985 15.6266C14.9985 15.8568 14.9578 15.9423 14.9578 15.9423C14.9578 15.9423 14.5967 15.911 14.4297 15.911C13.3681 15.911 12.2532 16.3738 12.2532 17.7673C12.2532 18.8653 12.9841 19.1173 13.4375 19.1173C14.3036 19.1173 14.677 18.544 14.6969 18.5423L14.6563 19.0204H15.7375L16.2203 15.572C16.2203 14.1089 14.969 14.061 14.5344 14.061V14.061ZM18.3531 14.061C17.4493 14.061 16.5313 14.4259 16.5313 15.672C16.5313 17.0839 18.061 16.9412 18.061 17.536C18.061 17.933 17.6341 17.9657 17.3047 17.9657C16.7347 17.9657 16.2222 17.7688 16.2203 17.7782L16.0563 18.8563C16.0858 18.8655 16.4032 19.0079 17.4282 19.0079C17.7034 19.0079 19.2766 19.0778 19.2766 17.4391C19.2766 15.9072 17.8203 16.2108 17.8203 15.5954C17.8203 15.289 18.0568 15.1923 18.4906 15.1923C18.6629 15.1923 19.3266 15.247 19.3266 15.247L19.4797 14.1579C19.4797 14.158 19.0515 14.061 18.3532 14.061H18.3531ZM24.0031 14.061C22.7471 14.0613 21.8172 15.4119 21.8172 16.9376C21.8172 18.6985 22.9823 19.1173 23.975 19.1173C24.8913 19.1173 25.2953 18.9126 25.2953 18.9126L25.5141 17.711C25.5141 17.711 24.817 18.0173 24.1875 18.0173C22.8462 18.0173 23.0813 17.0188 23.0813 17.0188H25.6203C25.6203 17.0188 25.7844 16.2119 25.7844 15.8829C25.7844 15.0619 25.3747 14.061 24.0032 14.061H24.0031ZM28.5516 14.1126C27.9858 14.1126 27.5656 14.8735 27.5656 14.8735L27.6781 14.1751H26.5031L25.7141 18.997H27.0125C27.3803 16.9379 27.4474 15.2659 28.325 15.572C28.4786 14.775 28.6277 14.4671 28.7953 14.1298C28.7953 14.1298 28.7166 14.1126 28.5516 14.1126H28.5516ZM39.0719 14.1126C38.5061 14.1126 38.086 14.8735 38.086 14.8735L38.1985 14.1751H37.0235L36.2344 18.997H37.5313C37.8992 16.9379 37.968 15.2659 38.8453 15.572C38.9992 14.775 39.1481 14.4671 39.3157 14.1298C39.3157 14.1298 39.2369 14.1126 39.0719 14.1126H39.0719ZM23.9969 15.1485C24.7102 15.1485 24.5797 15.9537 24.5797 16.0188H23.175C23.175 15.9357 23.3079 15.1485 23.9969 15.1485H23.9969ZM40.9704 15.2423C41.4244 15.2421 41.6579 15.5488 41.6579 16.2704C41.6579 16.9251 41.3277 17.8001 40.6438 17.8001C40.1899 17.8001 39.9766 17.4252 39.9766 16.8376C39.9766 15.8767 40.4162 15.2423 40.9703 15.2423H40.9704ZM34.7313 16.8829C34.9165 16.8831 34.9548 16.9011 34.986 16.9095C34.9815 16.9087 34.9806 16.9096 34.9985 16.9126C35.0219 17.1273 34.8687 18.1345 34.1281 18.1345C33.7463 18.1345 33.6485 17.8308 33.6485 17.6516C33.6485 17.3022 33.8304 16.8829 34.7313 16.8829ZM14.536 16.8876C14.7463 16.8878 14.7693 16.9113 14.8047 16.9173C14.8282 17.1319 14.6744 18.1376 13.9313 18.1376C13.5479 18.1376 13.4485 17.8354 13.4485 17.6563C13.4485 17.3071 13.6315 16.8876 14.536 16.8876Z" fill="white"/>
</svg>

                        </li>
                        <li className='payment'>
                        <svg width="46" height="18" viewBox="0 0 46 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.9999 4.16618L39.9954 17.5824H38.1382L40.3692 12.8875L36.416 4.16475H38.3696L41.2302 10.8506H41.2676L44.0377 4.16475L45.9999 4.16618ZM21.0535 8.31481V13.75H19.166V0.333809H24.1599C25.3454 0.301314 26.4997 0.715353 27.3943 1.49387C28.2784 2.21981 28.7642 3.24618 28.7499 4.3315C28.7559 4.87768 28.637 5.41801 28.402 5.91111C28.167 6.4042 27.8223 6.83699 27.3943 7.17631C26.526 7.93962 25.4479 8.31481 24.1599 8.31481H21.0535ZM21.0463 1.98837V6.66743H24.2059C24.8938 6.6921 25.5637 6.44471 26.0704 5.97887C26.5577 5.54475 26.8265 4.9525 26.8265 4.33868C26.8265 3.71768 26.5562 3.12543 26.0704 2.6985C25.8222 2.46231 25.5296 2.27778 25.2095 2.15563C24.8895 2.03348 24.5483 1.97614 24.2059 1.98693L21.0463 1.98837ZM32.5305 4.16618C33.7279 4.16618 34.6795 4.50256 35.3753 5.16956C36.071 5.83656 36.416 6.74937 36.416 7.90943V13.4567H34.8592V12.2061H34.7917C34.1175 13.2325 33.2262 13.7486 32.1107 13.7486C31.1519 13.7486 30.3584 13.4567 29.7144 12.8645C29.4037 12.5894 29.1564 12.2502 28.9896 11.8702C28.8228 11.4902 28.7405 11.0786 28.7484 10.6637C28.7484 9.73506 29.0848 8.99475 29.7662 8.43987C30.4404 7.89362 31.346 7.61618 32.4759 7.61618C33.4419 7.61618 34.2354 7.80306 34.8564 8.16962V7.78006C34.8584 7.49727 34.7999 7.21732 34.6849 6.95898C34.5698 6.70064 34.4009 6.46989 34.1894 6.28218C33.7633 5.88338 33.2003 5.66362 32.6167 5.66837C31.7111 5.66837 30.9924 6.06512 30.4605 6.85862L29.0302 5.93C29.8165 4.75412 30.9837 4.16331 32.5262 4.16331L32.5305 4.16618ZM30.4274 10.7025C30.4242 10.9155 30.4714 11.1263 30.565 11.3176C30.6587 11.509 30.7963 11.6755 30.9665 11.8036C31.3259 12.0954 31.7758 12.2536 32.2315 12.2449C32.9129 12.2449 33.5712 11.9603 34.0585 11.4586C34.5746 10.9799 34.8679 10.3057 34.8679 9.60137C34.359 9.18162 33.6546 8.97175 32.749 8.97175C32.082 8.97175 31.5357 9.13706 31.0944 9.46625C30.6531 9.80262 30.4274 10.208 30.4274 10.7011V10.7025ZM7.82417 0.333809C9.75962 0.310466 11.6312 1.02549 13.0581 2.33337L10.8271 4.51981C10.0121 3.76368 8.9357 3.353 7.82417 3.37412C6.85419 3.37887 5.90978 3.6857 5.12222 4.25196C4.33467 4.81821 3.7431 5.61576 3.42973 6.53375C3.10047 7.4845 3.10047 8.51836 3.42973 9.46912C3.7431 10.3871 4.33467 11.1847 5.12222 11.7509C5.90978 12.3172 6.85419 12.624 7.82417 12.6287C8.8793 12.6287 9.78636 12.3671 10.4893 11.9028C10.8937 11.6395 11.2403 11.2965 11.5079 10.8949C11.7756 10.4934 11.9587 10.0415 12.0461 9.56687H7.82273V6.61712H15.1971C15.2877 7.13318 15.3322 7.65068 15.3322 8.17393C15.3322 10.5099 14.4784 12.4864 13.0035 13.819C11.7083 14.9877 9.93442 15.6676 7.82273 15.6676C6.38136 15.675 4.96589 15.2846 3.73205 14.5395C2.4982 13.7944 1.49378 12.7233 0.829296 11.4442C0.282973 10.3783 -0.00195313 9.19776 -0.00195312 8C-0.00195313 6.80224 0.282973 5.62166 0.829296 4.55575C1.49298 3.27786 2.49602 2.20761 3.72823 1.46255C4.96045 0.717495 6.37417 0.326451 7.81411 0.332372L7.82417 0.333809Z" fill="white"/>
</svg>

                        </li>
                        <li className='payment'>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.40794 15.8799C7.86744 16.5239 7.00638 17.0342 6.14675 16.9595C6.03319 16.0912 6.46157 15.1612 6.95607 14.5847C7.49513 13.9278 8.43813 13.4563 9.20288 13.4175C9.29344 14.3245 8.93982 15.2158 8.40938 15.8799H8.40794ZM9.19425 17.1305C7.94507 17.0544 6.87269 17.8479 6.28044 17.8479C5.67525 17.8479 4.76819 17.1679 3.78063 17.1909C2.49982 17.2067 1.30238 17.9384 0.651191 19.1157C-0.704371 21.4574 0.299004 24.9247 1.60138 26.8337C2.23819 27.7767 3.00007 28.8102 4.00488 28.7815C4.95507 28.7427 5.33744 28.1533 6.48313 28.1533C7.64319 28.1533 7.97238 28.7815 8.98438 28.7585C10.0237 28.7427 10.6821 27.8155 11.3189 26.8725C12.0448 25.8015 12.3438 24.7522 12.3596 24.7004C12.3438 24.6774 10.3457 23.9069 10.3313 21.5854C10.3155 19.6375 11.9025 18.7104 11.9701 18.6572C11.0788 17.3102 9.6715 17.1679 9.19282 17.132L9.19425 17.1305ZM16.4048 14.4942V28.6607H18.5826V23.8178H21.5941C24.3412 23.8178 26.2732 21.9088 26.2732 19.1531C26.2732 16.3917 24.38 14.4956 21.6689 14.4956L16.4048 14.4942ZM18.5826 16.3514H21.091C22.977 16.3514 24.0566 17.3692 24.0566 19.1589C24.0566 20.9485 22.977 21.9749 21.0766 21.9749H18.5826V16.3514ZM30.2393 28.7657C31.6092 28.7657 32.8742 28.0699 33.4521 26.9602H33.4981V28.6607H35.5106V21.6069C35.5106 19.5714 33.8948 18.2475 31.4008 18.2475C29.095 18.2475 27.3873 19.5872 27.3283 21.4215H29.2819C29.4472 20.546 30.2407 19.9768 31.3418 19.9768C32.6744 19.9768 33.4161 20.605 33.4161 21.7593V22.537L30.7064 22.7023C28.175 22.859 26.8123 23.8997 26.8123 25.7196C26.8123 27.5539 28.221 28.7671 30.2407 28.7671L30.2393 28.7657ZM30.8315 27.0881C29.67 27.0881 28.9297 26.526 28.9297 25.6664C28.9297 24.7752 29.6413 24.2505 30.9954 24.1671L33.4147 24.0176V24.8183C33.4147 26.1451 32.2992 27.0881 30.8229 27.0881H30.8315ZM38.1987 32.5161C40.3161 32.5161 41.3138 31.6924 42.182 29.2142L46 18.3884H43.792L41.2318 26.7503H41.1858L38.6256 18.3884H36.3501L40.0344 28.6981L39.8389 29.3263C39.5011 30.3829 38.9634 30.7925 38.0046 30.7925C37.8321 30.7925 37.5029 30.771 37.3678 30.7566V32.4572C37.4943 32.4931 38.0348 32.5089 38.1915 32.5089L38.1987 32.5161Z" fill="white"/>
</svg>

                        </li>
                        <li className='payment'>
                        <svg width="46" height="31" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.9333 31H3.06667C2.25334 31 1.47332 30.6734 0.898206 30.092C0.323094 29.5107 0 28.7222 0 27.9L0 3.1C0 2.27783 0.323094 1.48933 0.898206 0.907969C1.47332 0.326606 2.25334 0 3.06667 0L42.9333 0C43.7467 0 44.5267 0.326606 45.1018 0.907969C45.6769 1.48933 46 2.27783 46 3.1V27.9C46 28.7222 45.6769 29.5107 45.1018 30.092C44.5267 30.6734 43.7467 31 42.9333 31ZM17.9298 13.3365C17.8948 13.3369 17.8603 13.3453 17.8289 13.3609C17.7976 13.3766 17.77 13.3991 17.7483 13.4269C17.698 13.4787 17.6692 13.548 17.6678 13.6206C17.6678 13.6477 17.7931 14.034 18.0614 14.8257L18.6415 16.5385L18.9111 17.3368C19.2135 18.2323 19.3715 18.7085 19.3852 18.7653C18.7903 19.5099 18.2525 20.2992 17.7764 21.1265L17.7279 21.2169L17.7253 21.2492C17.7253 21.3784 17.8288 21.4843 17.9579 21.4843L17.9924 21.4817H17.9911H19.5474C19.62 21.4813 19.6912 21.4622 19.7545 21.4263C19.8178 21.3903 19.8709 21.3387 19.9091 21.2763L19.9103 21.275L25.0623 13.7588C25.0894 13.7228 25.1042 13.6788 25.1045 13.6335L25.1032 13.6142V13.6155C25.1015 13.5429 25.0727 13.4737 25.0227 13.4217C25.0012 13.394 24.9739 13.3716 24.9427 13.3559C24.9116 13.3403 24.8773 13.3319 24.8426 13.3313H23.2849C23.2122 13.3318 23.1408 13.3508 23.0773 13.3868C23.0139 13.4227 22.9605 13.4742 22.9221 13.5367L22.9208 13.538L20.7741 16.7232L19.8861 13.6594C19.8633 13.566 19.8103 13.483 19.7355 13.4236C19.6607 13.3641 19.5685 13.3317 19.4733 13.3313L19.4401 13.3326H19.4414L17.9298 13.3365ZM35.7906 13.1931H35.7573C34.7888 13.1931 33.9186 13.618 33.3181 14.2923L33.3155 14.2949C32.6587 14.9816 32.292 15.8998 32.2933 16.855V16.8898V16.8885C32.2907 16.926 32.2907 16.9712 32.2907 17.0151C32.2907 17.7087 32.5578 18.3404 32.9922 18.8092L32.9909 18.808C33.2381 19.0513 33.5322 19.2404 33.855 19.3636C34.1778 19.4867 34.5222 19.5411 34.8667 19.5235H34.8603C35.2909 19.5184 35.6998 19.4292 36.0729 19.2691L36.0525 19.2768C36.4294 19.1335 36.7489 18.91 37.0006 18.6258L37.0032 18.6232C36.9904 18.6969 36.9763 18.7589 36.9597 18.8183L36.9623 18.8054C36.9395 18.8845 36.9257 18.9659 36.9214 19.0482V19.0508C36.9214 19.2678 37.0096 19.3776 37.1846 19.3776H38.5787C38.6331 19.3825 38.688 19.3764 38.74 19.3595C38.7921 19.3427 38.8402 19.3154 38.8817 19.2794C38.9231 19.2434 38.957 19.1994 38.9814 19.1499C39.0057 19.1004 39.02 19.0465 39.0233 18.9914V18.9901L39.8513 13.6594C39.8591 13.6192 39.8578 13.5777 39.8474 13.5381C39.837 13.4984 39.8178 13.4617 39.7913 13.4307C39.7683 13.3987 39.7381 13.3727 39.7032 13.3547C39.6684 13.3368 39.6298 13.3274 39.5907 13.3274H38.0535C37.8657 13.3274 37.7468 13.5535 37.7085 14.0017C37.4836 13.7099 37.1878 13.482 36.8499 13.3401C36.512 13.1982 36.1435 13.1471 35.7803 13.1918L35.7906 13.1905V13.1931ZM12.8378 13.1931H12.8021C11.8348 13.1931 10.9646 13.618 10.3666 14.2923L10.3641 14.2949C9.70722 14.9816 9.3406 15.8998 9.34183 16.855V16.8898V16.8885C9.32491 17.2396 9.37819 17.5906 9.4985 17.9204C9.61882 18.2502 9.80369 18.552 10.0421 18.808L10.0408 18.8067C10.4931 19.251 11.1116 19.5248 11.7939 19.5248L11.9166 19.5222H11.9102C12.3344 19.5158 12.7369 19.4267 13.1036 19.2678L13.0832 19.2755C13.4652 19.1283 13.7898 18.9061 14.0517 18.6232L14.053 18.622C14.0057 18.7485 13.9763 18.8958 13.9725 19.0482V19.0508C13.9725 19.2678 14.0619 19.3776 14.2357 19.3776H15.6285C15.6829 19.3825 15.7378 19.3764 15.7898 19.3595C15.8419 19.3427 15.8901 19.3154 15.9315 19.2794C15.973 19.2434 16.0069 19.1994 16.0312 19.1499C16.0555 19.1004 16.0698 19.0465 16.0732 18.9914V18.9901L16.9024 13.6594C16.9094 13.6195 16.9075 13.5785 16.8969 13.5394C16.8863 13.5003 16.8672 13.4641 16.8411 13.4333C16.8181 13.4013 16.7879 13.3753 16.7531 13.3573C16.7182 13.3394 16.6796 13.33 16.6405 13.33H15.1033C14.9155 13.33 14.7967 13.556 14.7596 14.0042C14.5323 13.7149 14.2361 13.4886 13.8986 13.3467C13.5611 13.2048 13.1934 13.1519 12.8302 13.1931L12.8404 13.1918L12.8378 13.1931ZM41.6709 10.3333L41.6504 10.332C41.5894 10.3318 41.5306 10.3548 41.4856 10.3965C41.4406 10.4381 41.4128 10.4953 41.4077 10.5568V10.5581L40.0941 19.0547C40.0833 19.0956 40.0832 19.1386 40.0937 19.1795C40.1042 19.2205 40.1251 19.258 40.1542 19.2885C40.1783 19.3174 40.2085 19.3406 40.2425 19.3564C40.2765 19.3723 40.3135 19.3804 40.3509 19.3802H41.6926L41.7335 19.3827C41.8352 19.3827 41.9327 19.3419 42.0046 19.2693C42.0764 19.1966 42.1168 19.098 42.1168 18.9953V18.9927L43.4278 10.642L43.4291 10.6136C43.429 10.54 43.4053 10.4683 43.3614 10.4095V10.4108C43.3384 10.3861 43.3107 10.3663 43.28 10.3528C43.2492 10.3392 43.216 10.3322 43.1825 10.332L43.1633 10.3333H43.1646H41.6709ZM26.7592 10.3333C26.7044 10.3261 26.6486 10.3306 26.5956 10.3465C26.5426 10.3625 26.4935 10.3896 26.4516 10.426C26.4096 10.4625 26.3757 10.5075 26.3521 10.558C26.3285 10.6086 26.3157 10.6636 26.3146 10.7195L25.0023 19.0534C24.9955 19.093 24.9974 19.1336 25.0078 19.1725C25.0181 19.2113 25.0368 19.2473 25.0623 19.2781C25.0849 19.3103 25.1148 19.3364 25.1495 19.3544C25.1842 19.3724 25.2227 19.3817 25.2617 19.3815H26.9292C27.004 19.3814 27.0765 19.3551 27.1343 19.307C27.1921 19.259 27.2316 19.1922 27.2461 19.118V19.1154L27.6102 16.7465C27.6211 16.6427 27.6721 16.5476 27.7521 16.4817H27.7533C27.8405 16.4104 27.9452 16.3645 28.0562 16.3486H28.06C28.1635 16.3292 28.2823 16.3189 28.4037 16.3176H28.405C28.5123 16.3176 28.6401 16.3241 28.7883 16.3383C28.9503 16.3571 29.1134 16.3658 29.2764 16.3641C30.2126 16.3657 31.1147 16.009 31.8013 15.3657L31.7988 15.3682C32.1412 15.0012 32.4056 14.5672 32.5757 14.0929C32.7458 13.6186 32.8179 13.1141 32.7878 12.6105V12.6209C32.8153 12.2879 32.7588 11.9532 32.6236 11.6483C32.4884 11.3433 32.2789 11.078 32.0147 10.8771L32.0096 10.8733C31.3999 10.4835 30.6856 10.2944 29.9652 10.332H29.9728L26.7592 10.3333ZM3.78222 10.3333C3.72877 10.3275 3.67471 10.3332 3.62355 10.3499C3.57239 10.3666 3.52528 10.394 3.48528 10.4303C3.44527 10.4665 3.41326 10.5109 3.39134 10.5606C3.36941 10.6102 3.35805 10.6639 3.358 10.7183V10.7208L2.04444 19.0547C2.03759 19.0943 2.03942 19.1349 2.0498 19.1738C2.06017 19.2126 2.07885 19.2487 2.1045 19.2794C2.12707 19.3116 2.15697 19.3377 2.19167 19.3557C2.22637 19.3737 2.26484 19.383 2.30383 19.3827H3.84228C3.89713 19.39 3.95288 19.3855 4.00589 19.3696C4.0589 19.3536 4.10799 19.3265 4.14995 19.29C4.19191 19.2536 4.22579 19.2086 4.2494 19.1581C4.27301 19.1075 4.2858 19.0524 4.28694 18.9965L4.65111 16.7503C4.66218 16.647 4.71259 16.552 4.79167 16.4855H4.79294C4.88013 16.4143 4.98479 16.3683 5.09578 16.3525H5.09961C5.21268 16.3323 5.32724 16.322 5.44206 16.3215H5.44333C5.55067 16.3215 5.67844 16.328 5.82667 16.3422C5.98826 16.3609 6.15085 16.3696 6.3135 16.368C7.28844 16.368 8.17522 15.9895 8.83967 15.3695L8.83711 15.3721C9.17938 15.005 9.44369 14.5709 9.61378 14.0967C9.78386 13.6224 9.85612 13.118 9.82611 12.6144V12.6248C9.85361 12.2917 9.79712 11.9571 9.66193 11.6521C9.52673 11.3472 9.31725 11.0819 9.05306 10.881L9.04794 10.8771C8.44086 10.4888 7.73001 10.2993 7.01244 10.3346H7.02011L3.78222 10.3333ZM35.7062 17.8702L35.6449 17.8715C35.3184 17.8718 35.0024 17.7551 34.753 17.5421L34.7556 17.5434C34.6402 17.436 34.5482 17.3056 34.4853 17.1604C34.4224 17.0153 34.39 16.8585 34.3901 16.7L34.3914 16.6418V16.607C34.3914 16.1239 34.5843 15.686 34.8974 15.3682C35.2053 15.0492 35.6347 14.8516 36.11 14.8516H36.1522H36.1496L36.1931 14.8503C36.5368 14.8503 36.8498 14.9782 37.0901 15.1887L37.0888 15.1874C37.2074 15.2985 37.3021 15.4331 37.3667 15.583C37.4314 15.7328 37.4646 15.8945 37.4644 16.058L37.4632 16.12V16.1174V16.1484C37.4632 16.625 37.2677 17.0565 36.9521 17.3626C36.7926 17.5231 36.6035 17.6504 36.3954 17.737C36.1874 17.8237 35.9645 17.8681 35.7394 17.8676H35.7075H35.7088L35.7062 17.8702ZM12.7331 17.8702L12.6692 17.8715C12.3344 17.8715 12.0264 17.7475 11.7913 17.5421L11.7926 17.5434C11.6803 17.4348 11.5908 17.3043 11.5298 17.1598C11.4687 17.0152 11.4373 16.8597 11.4374 16.7025L11.4387 16.6418V16.607C11.4387 16.1239 11.6316 15.686 11.9447 15.3682C12.2526 15.0492 12.6807 14.8516 13.156 14.8516H13.2007H13.1982L13.2416 14.8503C13.5853 14.8503 13.8984 14.9782 14.1386 15.1887L14.1373 15.1874C14.2557 15.2984 14.35 15.4329 14.4144 15.5825C14.4789 15.7321 14.512 15.8935 14.5117 16.0567L14.5104 16.12V16.1174V16.1626C14.5104 16.6392 14.3149 17.0681 13.9993 17.3742C13.6718 17.6928 13.2349 17.8706 12.7803 17.8702H12.7343H12.7369H12.7331ZM27.9476 14.5635L28.2913 12.3793C28.294 12.3472 28.303 12.3159 28.3177 12.2872C28.3324 12.2586 28.3526 12.2332 28.377 12.2124C28.4015 12.1917 28.4297 12.176 28.4602 12.1663C28.4906 12.1566 28.5227 12.153 28.5545 12.1559H28.5532H28.9174L28.9953 12.1546C29.2164 12.1546 29.4349 12.1701 29.6483 12.1998L29.624 12.1972C29.8221 12.2334 29.9946 12.3238 30.13 12.453C30.2072 12.5267 30.2686 12.6156 30.3106 12.7142C30.3526 12.8128 30.3742 12.9191 30.3741 13.0265L30.3728 13.0755V13.073C30.3996 13.2887 30.3733 13.5079 30.2962 13.7109C30.2191 13.914 30.0935 14.0946 29.9307 14.2367L29.9294 14.238C29.5222 14.4729 29.0554 14.5808 28.5877 14.548H28.5954L27.9501 14.5687L27.9476 14.5635ZM4.97439 14.5635L5.31811 12.3793C5.32068 12.3471 5.32955 12.3157 5.34421 12.287C5.35887 12.2583 5.37903 12.2328 5.40352 12.212C5.42801 12.1912 5.45634 12.1755 5.48686 12.1659C5.51738 12.1563 5.5495 12.1529 5.58133 12.1559H5.58006H5.96339C6.37249 12.1256 6.78202 12.2086 7.14789 12.3961L7.13511 12.3897C7.37661 12.546 7.45839 12.8779 7.37789 13.3791C7.37172 13.5662 7.32114 13.7491 7.23041 13.9123C7.13968 14.0755 7.01146 14.2142 6.85656 14.3168L6.85272 14.3194C6.24709 14.5449 5.59861 14.6279 4.9565 14.5623L4.97439 14.5635Z" fill="white"/>
</svg>

                        </li>
                    </ul>
                </div>
            </div>
    )
}

export { FooterBottomSection };