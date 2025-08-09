import Typography from "@mui/material/Typography"
import { MdOutlineCopyAll } from "../../Icons"
// Removed CSS imports - using Tailwind CSS instead
const Invite = () => {
    return (
        <div className="w-full flex flex-col ">
            <main className="flex-1 bg-[url('../images/main-lines-pattern.png')] bg-cover bg-center">
                <div className="flex flex-col gap-3 mb-3">
                    <section className="invite">
                        <div className="bg-custom-bg-card rounded-lg">
                            <div className="p-4 flex flex-col items-center gap-2">
                                <div className="text-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={232}
                                        height={175}
                                        viewBox="0 0 232 175"
                                        fill="none"
                                    >
                                        <path
                                            d="M80.6378 112.037H79.6384V83.0413C79.6384 76.4548 74.299 71.0962 67.7357 71.0962C61.1724 71.0962 55.8324 76.4548 55.8324 83.0413V112.037H54.833V83.0413C54.833 75.9021 60.6214 70.0934 67.7357 70.0934C74.85 70.0934 80.6378 75.9021 80.6378 83.0413V112.037Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M106.45 157.09H29.0234L35.0015 104.909H100.472L106.45 157.09Z"
                                            fill="#F3841C"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M111.487 157.09H34.0615L40.0396 104.909H105.51L111.487 157.09Z"
                                            fill="#F3841C"
                                        />
                                        <mask
                                            id="mask0_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={34}
                                            y={104}
                                            width={78}
                                            height={54}
                                        >
                                            <path
                                                d="M111.487 157.092H34.0615L40.0396 104.911H105.51L111.487 157.092Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_135_2984)">
                                            <path
                                                d="M138.035 101.787C156.924 165.221 26.7038 150.725 34.0605 157.092C41.4172 163.459 99.3221 181.955 99.3221 181.955L127.293 176.338L115.303 98.8364L106.446 95.5553"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M111.487 157.09H34.0615L40.0396 104.909H105.51L111.487 157.09Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M60.3727 113.101C60.9583 113.101 61.433 112.624 61.433 112.037C61.433 111.45 60.9583 110.973 60.3727 110.973C59.7872 110.973 59.3125 111.45 59.3125 112.037C59.3125 112.624 59.7872 113.101 60.3727 113.101Z"
                                            fill="#E5892F"
                                        />
                                        <path
                                            d="M85.1774 113.101C85.763 113.101 86.2377 112.624 86.2377 112.037C86.2377 111.45 85.763 110.973 85.1774 110.973C84.5919 110.973 84.1172 111.45 84.1172 112.037C84.1172 112.624 84.5919 113.101 85.1774 113.101Z"
                                            fill="#E5892F"
                                        />
                                        <path
                                            d="M85.6769 112.037H84.6799V83.0413C84.6799 76.4548 79.3404 71.0962 72.7765 71.0962C66.2127 71.0962 60.8738 76.4548 60.8738 83.0413V112.037H59.875V83.0413C59.875 75.9021 65.6628 70.0934 72.7765 70.0934C79.8902 70.0934 85.6792 75.9021 85.6792 83.0413L85.6769 112.037Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M72.484 128.252L65.1592 143.928L82.3492 142.456L72.484 128.252Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M59.3122 132.746C62.8361 132.746 65.6928 129.879 65.6928 126.343C65.6928 122.807 62.8361 119.94 59.3122 119.94C55.7883 119.94 52.9316 122.807 52.9316 126.343C52.9316 129.879 55.7883 132.746 59.3122 132.746Z"
                                            fill="#F3841C"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M88.7577 121.686H79.4766V131H88.7577V121.686Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M49.189 109.859L47.373 112.047M97.5024 139.753C96.5019 141.707 95.2833 143.541 93.8699 145.221"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M76.3955 74.2994V143.838C76.3955 151.157 82.3074 157.09 89.6004 157.09H159.954C167.247 157.09 173.159 151.157 173.159 143.838V74.2994C161.594 81.1661 144.217 85.5364 124.778 85.5364C105.339 85.5364 87.9613 81.1661 76.3955 74.2994Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask1_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={76}
                                            y={74}
                                            width={98}
                                            height={84}
                                        >
                                            <path
                                                d="M76.3955 74.3003V143.839C76.3955 151.158 82.3074 157.091 89.6004 157.091H159.954C167.247 157.091 173.159 151.158 173.159 143.839V74.3003C161.594 81.1669 144.217 85.5372 124.778 85.5372C105.339 85.5372 87.9613 81.1669 76.3955 74.3003Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask1_135_2984)">
                                            <path
                                                d="M62.2549 134.554C120.227 173.927 175.261 145.491 184.524 131.82C193.787 118.149 191.152 160.256 191.152 160.256C191.152 160.256 129.184 191.001 122.093 187.675C115.002 184.349 62.2549 175.567 62.2549 175.567"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M76.3955 74.2994V143.838C76.3955 151.157 82.3074 157.09 89.6004 157.09H159.954C167.247 157.09 173.159 151.157 173.159 143.838V74.2994C161.594 81.1661 144.217 85.5364 124.778 85.5364C105.339 85.5364 87.9613 81.1661 76.3955 74.2994Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.953 38.6865H89.5994C82.3065 38.6865 76.3945 44.6188 76.3945 51.9378V74.2997C87.9603 81.1663 105.337 85.5366 124.776 85.5366C144.215 85.5366 161.592 81.1663 173.157 74.2997V51.9378C173.158 44.6188 167.246 38.6865 159.953 38.6865Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.953 34.9949H89.5994C82.3065 34.9949 76.3945 40.9277 76.3945 48.2467V70.6086C87.9603 77.4747 105.337 81.845 124.776 81.845C144.215 81.845 161.592 77.4747 173.157 70.6086V48.2467C173.158 40.9277 167.246 34.9949 159.953 34.9949Z"
                                            fill="#F3841C"
                                        />
                                        <mask
                                            id="mask2_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={76}
                                            y={34}
                                            width={98}
                                            height={48}
                                        >
                                            <path
                                                d="M159.954 34.9918H89.6004C82.3074 34.9918 76.3955 40.9246 76.3955 48.2437V70.6056C87.9613 77.4716 105.338 81.8419 124.777 81.8419C144.216 81.8419 161.593 77.4716 173.158 70.6056V48.2437C173.159 40.9246 167.247 34.9918 159.954 34.9918Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask2_135_2984)">
                                            <path
                                                d="M180.747 34.9928C178.989 100.511 80.8526 63.4517 84.6696 74.688C88.4865 85.9244 62.3506 91.7522 62.3506 91.7522L178.989 100.51L200.786 17.7831L173.254 16.325"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M159.953 34.9949H89.5994C82.3065 34.9949 76.3945 40.9277 76.3945 48.2467V70.6086C87.9603 77.4747 105.337 81.845 124.776 81.845C144.215 81.845 161.592 77.4747 173.157 70.6086V48.2467C173.158 40.9277 167.246 34.9949 159.953 34.9949Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M124.776 103.426C134.621 103.426 142.601 95.4166 142.601 85.5368C142.601 75.657 134.621 67.6478 124.776 67.6478C114.932 67.6478 106.951 75.657 106.951 85.5368C106.951 95.4166 114.932 103.426 124.776 103.426Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M124.777 98.9833C132.177 98.9833 138.176 92.963 138.176 85.5366C138.176 78.1101 132.177 72.0898 124.777 72.0898C117.377 72.0898 111.378 78.1101 111.378 85.5366C111.378 92.963 117.377 98.9833 124.777 98.9833Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask3_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={111}
                                            y={72}
                                            width={28}
                                            height={27}
                                        >
                                            <path
                                                d="M124.776 98.9827C132.176 98.9827 138.175 92.9624 138.175 85.536C138.175 78.1095 132.176 72.0892 124.776 72.0892C117.376 72.0892 111.377 78.1095 111.377 85.536C111.377 92.9624 117.376 98.9827 124.776 98.9827Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask3_135_2984)">
                                            <path
                                                d="M121.941 98.0717C129.341 98.0717 135.34 92.0514 135.34 84.6249C135.34 77.1985 129.341 71.1782 121.941 71.1782C114.541 71.1782 108.542 77.1985 108.542 84.6249C108.542 92.0514 114.541 98.0717 121.941 98.0717Z"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M124.777 98.9833C132.177 98.9833 138.176 92.963 138.176 85.5366C138.176 78.1101 132.177 72.0898 124.777 72.0898C117.377 72.0898 111.378 78.1101 111.378 85.5366C111.378 92.963 117.377 98.9833 124.777 98.9833Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M111.207 49.6721L105.879 54.7761M153.603 120.647C152.054 123.384 149.781 125.642 147.033 127.173"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M78.2158 128.906L82.212 130.365L78.2158 128.906Z"
                                            fill="#E5892F"
                                        />
                                        <path
                                            d="M157.307 95.426L134.56 94.0259C131.08 93.8113 128.814 90.2524 130.085 86.9905L132.896 79.7794C134.052 76.8138 137.58 75.5958 140.308 77.2192L158.572 88.089L157.307 95.426Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask4_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={129}
                                            y={76}
                                            width={30}
                                            height={20}
                                        >
                                            <path
                                                d="M157.307 95.4247L134.56 94.0246C131.08 93.81 128.814 90.2511 130.085 86.9892L132.896 79.778C134.052 76.8125 137.58 75.5945 140.308 77.2179L158.572 88.0877L157.307 95.4247Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask4_135_2984)">
                                            <path
                                                d="M154.238 82.2176C153.675 88.0025 151.286 90.7302 147.397 88.2374C143.508 85.7445 148.052 90.7314 151.8 92.3763C155.549 94.0211 133.298 95.4253 132.895 79.7787C132.63 69.4007 129.173 90.1398 129.173 90.1398L129.727 98.5376L133.671 100.889L150.443 103.711L158.032 96.2802V86.4034L154.238 82.2176Z"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M157.307 95.426L134.56 94.0259C131.08 93.8113 128.814 90.2524 130.085 86.9905L132.896 79.7794C134.052 76.8138 137.58 75.5958 140.308 77.2192L158.572 88.089L157.307 95.426Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.836 95.426L182.583 94.0259C186.063 93.8113 188.329 90.2524 187.058 86.9905L184.247 79.7794C183.091 76.8138 179.563 75.5958 176.835 77.2192L158.571 88.089L159.836 95.426Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.836 95.426L182.583 94.0259C186.063 93.8113 188.329 90.2524 187.058 86.9905L184.247 79.7794C183.091 76.8138 179.563 75.5958 176.835 77.2192L158.571 88.089L159.836 95.426Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask5_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={158}
                                            y={76}
                                            width={30}
                                            height={20}
                                        >
                                            <path
                                                d="M159.837 95.4247L182.584 94.0246C186.064 93.81 188.33 90.2511 187.059 86.9892L184.248 79.778C183.092 76.8125 179.564 75.5945 176.836 77.2179L158.572 88.0877L159.837 95.4247Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask5_135_2984)">
                                            <path
                                                d="M162.908 82.2176C163.47 88.0025 169.837 95.9392 173.725 93.4464C177.614 90.9535 169.511 98.5075 165.762 100.153C162.013 101.8 183.85 95.4253 184.25 79.7787C184.515 69.4007 187.972 90.1398 187.972 90.1398L187.418 98.5376L183.474 100.889L166.703 103.711L159.113 96.2802V86.4034L162.908 82.2176Z"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M159.836 95.426L182.583 94.0259C186.063 93.8113 188.329 90.2524 187.058 86.9905L184.247 79.7794C183.091 76.8138 179.563 75.5958 176.835 77.2192L158.571 88.089L159.836 95.426Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.589 84.2429H157.557C155.195 84.2429 153.279 86.1583 153.279 88.521V91.7591C153.279 94.1219 155.195 96.0372 157.557 96.0372H159.589C161.952 96.0372 163.867 94.1219 163.867 91.7591V88.521C163.867 86.1583 161.952 84.2429 159.589 84.2429Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M159.158 157.09H123.39C120.253 157.09 117.711 154.538 117.711 151.389V102.721H159.158V157.09Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask6_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={117}
                                            y={102}
                                            width={43}
                                            height={56}
                                        >
                                            <path
                                                d="M159.159 157.09H123.391C120.254 157.09 117.712 154.538 117.712 151.389V102.721H159.159V157.09Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask6_135_2984)">
                                            <g opacity="0.16">
                                                <path
                                                    d="M143.183 182.042L139.511 185.084L84.6553 118.39L88.3284 115.348L143.183 182.042Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M150.188 176.239L146.515 179.281L91.6602 112.588L95.3333 109.545L150.188 176.239Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M157.193 170.436L153.52 173.479L98.665 106.785L102.338 103.742L157.193 170.436Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M164.196 164.635L160.524 167.677L105.669 100.983L109.342 97.9412L164.196 164.635Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M171.202 158.831L167.529 161.873L112.674 95.1798L116.347 92.1371L171.202 158.831Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M178.206 153.029L174.532 156.071L119.678 89.3772L123.351 86.3345L178.206 153.029Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M185.21 147.227L181.537 150.269L126.683 83.5758L130.355 80.5331L185.21 147.227Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M192.215 141.424L188.542 144.467L133.688 77.7726L137.36 74.7305L192.215 141.424Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <g opacity="0.46">
                                                <path
                                                    d="M80.9879 130.354L77.2539 125.813L146.028 68.8413L149.763 73.3816L80.9879 130.354Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M88.11 139.012L84.376 134.472L153.15 77.5L156.885 82.0402L88.11 139.012Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M95.2311 147.672L91.4971 143.132L160.271 86.16L164.006 90.7003L95.2311 147.672Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M102.353 156.331L98.6191 151.79L167.393 94.8187L171.128 99.359L102.353 156.331Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M109.475 164.989L105.741 160.449L174.515 103.477L178.25 108.018L109.475 164.989Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M116.597 173.648L112.863 169.108L181.637 112.136L185.372 116.676L116.597 173.648Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M123.719 182.307L119.985 177.766L188.759 120.795L192.494 125.335L123.719 182.307Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M130.84 190.965L127.106 186.425L195.881 129.453L199.615 133.994L130.84 190.965Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </g>
                                        <path
                                            d="M159.158 157.09H123.39C120.253 157.09 117.711 154.538 117.711 151.389V102.721H159.158V157.09Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M157.252 157.09H193.02C196.156 157.09 198.699 154.538 198.699 151.389V102.721H157.252V157.09Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask7_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={157}
                                            y={102}
                                            width={42}
                                            height={56}
                                        >
                                            <path
                                                d="M157.253 157.09H193.021C196.157 157.09 198.7 154.538 198.7 151.389V102.721H157.253V157.09Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask7_135_2984)">
                                            <g opacity="0.16">
                                                <path
                                                    d="M182.087 175.059L178.906 177.694L131.4 119.935L134.581 117.3L182.087 175.059Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M188.153 170.034L184.972 172.669L137.467 114.91L140.648 112.276L188.153 170.034Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M194.219 165.008L191.039 167.643L143.533 109.884L146.714 107.25L194.219 165.008Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M200.286 159.983L197.105 162.618L149.6 104.859L152.78 102.224L200.286 159.983Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M206.351 154.957L203.171 157.592L155.665 99.8338L158.846 97.1989L206.351 154.957Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M212.418 149.933L209.237 152.568L161.731 94.8094L164.912 92.1744L212.418 149.933Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M218.483 144.908L215.302 147.542L167.797 89.7837L170.978 87.1488L218.483 144.908Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M224.549 139.883L221.369 142.518L173.863 84.7593L177.044 82.1244L224.549 139.883Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <g opacity="0.46">
                                                <path
                                                    d="M128.225 130.298L124.991 126.366L184.551 77.0267L187.785 80.9586L128.225 130.298Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M134.393 137.797L131.159 133.865L190.719 84.526L193.953 88.4578L134.393 137.797Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M140.561 145.295L137.327 141.363L196.887 92.0238L200.121 95.9556L140.561 145.295Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M146.728 152.794L143.494 148.862L203.054 99.5231L206.288 103.455L146.728 152.794Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M152.896 160.293L149.662 156.361L209.222 107.022L212.456 110.954L152.896 160.293Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M159.064 167.791L155.83 163.859L215.39 114.52L218.624 118.452L159.064 167.791Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M165.231 175.29L161.997 171.358L221.557 122.019L224.791 125.951L165.231 175.29Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M171.399 182.789L168.165 178.857L227.726 129.519L230.959 133.45L171.399 182.789Z"
                                                    stroke="#E5892F"
                                                    strokeWidth="0.696"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </g>
                                        <path
                                            d="M157.252 157.09H193.02C196.156 157.09 198.699 154.538 198.699 151.389V102.721H157.252V157.09Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M142.166 151.388V102.72H134.154V151.388C134.154 154.536 136.696 157.088 139.833 157.088H147.844C144.71 157.091 142.166 154.539 142.166 151.388ZM173.725 102.722V151.388C173.725 154.536 171.183 157.088 168.047 157.088H176.769C179.905 157.088 182.447 154.536 182.447 151.388V102.72L173.725 102.722Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M160.08 93.5026H116.978C116.606 93.5033 116.238 93.5775 115.894 93.7207C115.55 93.864 115.238 94.0736 114.976 94.3375C114.713 94.6014 114.505 94.9146 114.363 95.2589C114.222 95.6033 114.149 95.9722 114.15 96.3446V105.057C114.149 105.535 114.338 105.993 114.676 106.332C115.013 106.67 115.471 106.861 115.948 106.862H157.251V96.3446C157.25 95.9721 157.323 95.6032 157.464 95.2587C157.606 94.9143 157.814 94.6011 158.077 94.3371C158.339 94.0732 158.651 93.8636 158.995 93.7204C159.339 93.5772 159.708 93.5032 160.08 93.5026Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M200.148 93.5026H160.08C159.708 93.5033 159.339 93.5775 158.995 93.7207C158.652 93.864 158.34 94.0736 158.077 94.3375C157.814 94.6014 157.606 94.9146 157.465 95.2589C157.323 95.6033 157.251 95.9722 157.252 96.3446V106.86H201.178C201.656 106.859 202.114 106.668 202.451 106.329C202.788 105.991 202.977 105.532 202.976 105.054V96.3446C202.977 95.9722 202.905 95.6033 202.763 95.2589C202.622 94.9146 202.414 94.6014 202.151 94.3375C201.889 94.0736 201.576 93.864 201.233 93.7207C200.889 93.5775 200.521 93.5033 200.148 93.5026Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M182.585 93.4453H173.726C174.479 93.4488 175.2 93.7511 175.73 94.2857C176.26 94.8203 176.557 95.5435 176.554 96.2966V106.861H185.414V96.2978C185.417 95.5444 185.12 94.8208 184.59 94.2859C184.059 93.751 183.338 93.4487 182.585 93.4453ZM142.275 93.5033H133.418C131.855 93.5033 130.589 94.7932 130.589 96.3848V107.057H139.449V96.3848C139.449 94.7938 140.715 93.5033 142.275 93.5033ZM157.253 93.5033H166.113C166.485 93.504 166.854 93.5781 167.197 93.7213C167.541 93.8646 167.853 94.0741 168.116 94.3381C168.379 94.602 168.587 94.9152 168.728 95.2596C168.87 95.604 168.942 95.9729 168.941 96.3453V124.171L164.86 119.562L160.081 124.168V96.3453C160.082 95.9729 160.01 95.604 159.868 95.2596C159.726 94.9152 159.518 94.602 159.256 94.3381C158.993 94.0741 158.681 93.8646 158.337 93.7213C157.994 93.5781 157.625 93.504 157.253 93.5033Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M150.669 98.5667C149.074 99.4602 147.611 100.573 146.325 101.873M168.115 146.341C165.921 147.647 163.611 148.745 161.213 149.622M141.69 82.521L141.327 83.0679M138.975 133.567C138.487 133.945 138.108 134.447 137.879 135.021M166.768 105.31C166.805 105.573 166.752 105.84 166.618 106.068C166.484 106.297 166.276 106.473 166.029 106.568M177.115 83.9843L176.752 84.5313"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M92.2871 140.924C92.2871 141.584 96.4092 151.538 96.4092 151.538H91.3208L85.5156 140.1L92.2871 140.924Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask8_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={85}
                                            y={140}
                                            width={12}
                                            height={12}
                                        >
                                            <path
                                                d="M92.2861 140.924C92.2861 141.584 96.4082 151.538 96.4082 151.538H91.3199L85.5146 140.1L92.2861 140.924Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask8_135_2984)">
                                            <path
                                                d="M86.2402 143.306C90.4568 147.926 92.5512 141.631 94.4032 146.069C94.4751 144.362 94.8498 139.871 92.2862 140.924"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M92.2871 140.924C92.2871 141.584 96.4092 151.538 96.4092 151.538H91.3208L85.5156 140.1L92.2871 140.924Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M96.0222 149.364C95.067 150.666 89.8447 149.675 90.3962 149.938C89.1017 152.071 82.4317 152.512 81.4062 155.76L97.2402 155.269C99.0881 155.393 96.1307 149.967 96.0222 149.364Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M55.6012 143.209C55.23 143.785 53.635 154.67 53.635 154.67L48.6807 151.974L49.4735 138.9L55.6012 143.209Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask9_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={48}
                                            y={138}
                                            width={8}
                                            height={17}
                                        >
                                            <path
                                                d="M55.6022 143.208C55.231 143.785 53.636 154.67 53.636 154.67L48.6816 151.974L49.4745 138.9L55.6022 143.208Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask9_135_2984)">
                                            <path
                                                d="M48.6819 144.988C45.4386 146.734 55.4482 145.232 54.7273 149.49C55.4587 148.241 58.6846 142.726 55.6025 143.208"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M55.6012 143.209C55.23 143.785 53.635 154.67 53.635 154.67L48.6807 151.974L49.4735 138.9L55.6012 143.209Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M54.4713 151.075C53.3577 152.325 47.5147 151.101 48.0982 151.341C46.8843 153.555 38.512 153.119 37.584 156.782C37.584 156.782 51.2302 157.42 53.1471 157.058C55.0849 156.692 54.2799 155.207 54.4713 151.075Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M63.7642 22.3434C62.9864 23.4779 60.9483 26.2532 62.1571 28.5598C64.1006 32.2718 60.3271 36.4844 60.3271 36.4844C60.5162 36.2796 67.0598 34.8557 65.9462 34.713C65.4085 31.5822 64.1917 23.7592 63.7642 22.3434Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask10_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={60}
                                            y={22}
                                            width={7}
                                            height={15}
                                        >
                                            <path
                                                d="M63.7633 22.342C62.9855 23.4765 60.9474 26.2518 62.1561 28.5585C64.0997 32.2705 60.3262 36.483 60.3262 36.483C60.5153 36.2783 67.0588 34.8544 65.9452 34.7117C65.4076 31.5809 64.1907 23.7578 63.7633 22.342Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask10_135_2984)">
                                            <path
                                                d="M60.7682 31.2653C64.0428 33.5412 65.9116 32.9177 65.9116 32.9177C64.7412 34.9407 60.2021 36.4847 58.6123 36.4829L61.0872 32.1967"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M63.7642 22.3434C62.9864 23.4779 60.9483 26.2532 62.1571 28.5598C64.1006 32.2718 60.3271 36.4844 60.3271 36.4844C60.5162 36.2796 67.0598 34.8557 65.9462 34.713C65.4085 31.5822 64.1917 23.7592 63.7642 22.3434Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M67.1718 33.217C66.2752 32.8145 55.1165 36.831 55.8775 39.8534C52.7971 60.3372 57.4974 61.764 76.6235 49.2998C85.1855 42.5214 89.6439 44.5804 83.6444 36.5926C82.5424 35.4981 65.792 40.895 65.578 40.6439L67.1718 33.217Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask11_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={55}
                                            y={33}
                                            width={32}
                                            height={25}
                                        >
                                            <path
                                                d="M67.1718 33.2157C66.2752 32.8131 55.1165 36.8296 55.8775 39.852C52.7971 60.3359 57.4974 61.7627 76.6235 49.2985C85.1855 42.52 89.6439 44.579 83.6444 36.5913C82.5424 35.4968 65.792 40.8937 65.578 40.6426L67.1718 33.2157Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask11_135_2984)">
                                            <path
                                                d="M64.4811 56.4439C64.3802 60.1112 56.1349 60.2249 55.8467 56.4439C55.9482 52.776 64.1935 52.6629 64.4811 56.4439Z"
                                                fill="white"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M50.6455 49.3792C57.9338 57.2295 64.6589 54.5731 66.9319 39.3736C68.183 31.0042 75.1099 55.2511 75.1099 55.2511L57.4994 59.7751C57.4994 59.7751 55.1034 64.6645 53.299 58.321L51.4946 51.9747"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M67.1718 33.217C66.2752 32.8145 55.1165 36.831 55.8775 39.8534C52.7971 60.3372 57.4974 61.764 76.6235 49.2998C85.1855 42.5214 89.6439 44.5804 83.6444 36.5926C82.5424 35.4981 65.792 40.895 65.578 40.6439L67.1718 33.217Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M90.5901 29.7412C90.5112 32.2549 90.1522 35.8799 89.8836 37.2302C89.0136 41.6144 87.0776 39.5026 81.9034 44.1583C81.1622 45.5271 80.0196 42.2831 80.8838 38.6692C83.0014 36.7621 83.5036 32.9272 83.7681 32.0862C83.7258 32.0682 90.4683 29.8068 90.5901 29.7412Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask12_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={80}
                                            y={29}
                                            width={11}
                                            height={16}
                                        >
                                            <path
                                                d="M90.5901 29.7388C90.5112 32.2525 90.1522 35.8775 89.8836 37.2277C89.0136 41.6119 87.0776 39.5002 81.9034 44.1558C81.1622 45.5246 80.0196 42.2807 80.8838 38.6667C83.0014 36.7597 83.5036 32.9247 83.7681 32.0837C83.7258 32.0657 90.4683 29.8043 90.5901 29.7388Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask12_135_2984)">
                                            <path
                                                d="M80.5219 36.3317C80.711 37.0277 87.7139 35.2627 85.3817 33.4682L80.2197 30.6703L80.5219 36.3317Z"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M90.5901 29.7412C90.5112 32.2549 90.1522 35.8799 89.8836 37.2302C89.0136 41.6144 87.0776 39.5026 81.9034 44.1583C81.1622 45.5271 80.0196 42.2831 80.8838 38.6692C83.0014 36.7621 83.5036 32.9272 83.7681 32.0862C83.7258 32.0682 90.4683 29.8068 90.5901 29.7412Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M87.2842 29.2346C91.0043 27.8113 92.0634 31.7118 87.4037 31.9421L87.2842 29.2346Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M87.2842 29.2346C91.0043 27.8113 92.0634 31.7118 87.4037 31.9421"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M83.7211 28.9637C77.4937 18.8642 82.1928 17.4797 87.7272 19.2626C93.2616 21.0456 98.8986 25.8828 91.01 30.1869L88.2509 29.4706L88.0769 26.6327"
                                            fill="#E5892F"
                                        />
                                        <mask
                                            id="mask13_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={80}
                                            y={18}
                                            width={15}
                                            height={13}
                                        >
                                            <path
                                                d="M83.7221 28.9651C77.4947 18.8655 82.1938 17.4811 87.7282 19.264C93.2625 21.0469 98.8996 25.8841 91.011 30.1883L88.2519 29.472L88.0779 26.6341"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask13_135_2984)">
                                            <path
                                                d="M84.4934 21.6842C84.4105 21.0683 82.5551 21.6367 81.9606 25.1515C81.3661 28.6663 83.3131 26.8103 83.3131 26.8103"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M83.7211 28.9637C77.4937 18.8642 82.1928 17.4797 87.7272 19.2626C93.2616 21.0456 98.8986 25.8828 91.01 30.1869L88.2509 29.4706L88.0769 26.6327"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M85.243 20.8293C81.687 23.4318 82.981 25.1573 80.2863 29.4273C78.1345 32.8406 85.3323 36.3507 88.5589 30.7758C91.7854 25.2008 88.9127 21.7858 88.9127 21.7858"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask14_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={79}
                                            y={20}
                                            width={12}
                                            height={14}
                                        >
                                            <path
                                                d="M85.244 20.8274C81.688 23.4299 82.982 25.1554 80.2873 29.4253C78.1355 32.8386 85.3333 36.3488 88.5598 30.7738C91.7864 25.1989 88.9136 21.7838 88.9136 21.7838"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask14_135_2984)">
                                            <path
                                                d="M88.3681 28.311C84.8602 27.1968 85.0227 20.6956 85.0227 20.6956L87.7144 21.6166L89.0687 24.987"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M85.243 20.8293C81.687 23.4318 82.981 25.1573 80.2863 29.4273C78.1345 32.8406 85.3323 36.3507 88.5589 30.7758C91.7854 25.2008 88.9127 21.7858 88.9127 21.7858"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M82.9493 25.0515C82.269 26.9075 83.7543 27.3512 84.4875 25.6599C85.1678 23.8062 83.6824 23.3602 82.9493 25.0515Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask15_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={82}
                                            y={23}
                                            width={3}
                                            height={4}
                                        >
                                            <path
                                                d="M82.9493 25.0534C82.269 26.9094 83.7543 27.3531 84.4875 25.6618C85.1678 23.8081 83.6824 23.3621 82.9493 25.0534Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask15_135_2984)">
                                            <path
                                                d="M82.7551 25.1047C82.4651 26.0072 83.193 26.3129 83.5746 25.3414C83.8681 24.4389 83.1367 24.1356 82.7551 25.1047Z"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M82.5737 24.8182C81.4015 25.5363 80.6254 25.5224 80.4903 25.911C80.3552 26.2996 80.8615 27.0942 81.8382 27.3262"
                                            fill="white"
                                        />
                                        <path
                                            d="M82.5737 24.8182C81.4015 25.5363 80.6254 25.5224 80.4903 25.911C80.3552 26.2996 80.8615 27.0942 81.8382 27.3262"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            opacity="0.27"
                                            d="M84.0824 28.7499C84.351 29.3444 85.2071 29.6199 86.0208 29.3589C86.863 29.0897 87.3461 28.352 87.0712 27.7151C86.7963 27.0783 85.8688 26.8115 85.0331 27.1241C84.2257 27.4251 83.8098 28.1507 84.0824 28.7499Z"
                                            fill="#EFF1F7"
                                        />
                                        <path
                                            d="M84.2745 22.6665C85.8724 23.1305 85.9947 23.8782 84.9763 23.6525C83.9578 23.4269 83.2305 22.3632 84.2745 22.6665Z"
                                            fill="#E5892F"
                                        />
                                        <path
                                            d="M83.5523 28.6964C82.7751 29.4429 81.9863 28.998 81.9863 28.998"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M85.303 19.7925C84.1471 26.2415 91.0114 30.1872 91.0114 30.1872L93.1725 28.1114L90.5207 22.0133L85.303 19.7925Z"
                                            fill="#E5892F"
                                        />
                                        <mask
                                            id="mask16_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={85}
                                            y={19}
                                            width={9}
                                            height={12}
                                        >
                                            <path
                                                d="M85.3021 19.7911C84.1461 26.2402 91.0104 30.1859 91.0104 30.1859L93.1715 28.1101L90.5197 22.012L85.3021 19.7911Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask16_135_2984)">
                                            <path
                                                d="M91.4036 28.587C89.8956 26.7432 87.6916 27.0158 87.5071 27.3847C87.3227 27.7536 89.3248 28.384 89.3248 28.384"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M85.303 19.7925C84.1471 26.2415 91.0114 30.1872 91.0114 30.1872L93.1725 28.1114L90.5207 22.0133L85.303 19.7925Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M87.7429 27.8005C93.8793 26.6481 92.1387 33.2769 87.4082 31.2741L87.7429 27.8005Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M87.7429 27.8005C93.8793 26.6481 92.1387 33.2769 87.4082 31.2741"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M89.6598 28.6498C90.1134 28.7316 90.1186 29.779 89.0938 29.9629"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M87.7767 20.984C87.1811 22.7478 91.0143 24.2506 91.0143 24.2506L87.7767 20.984Z"
                                            fill="#E5892F"
                                        />
                                        <path
                                            d="M96.4089 141.081C85.8796 149.429 80.0419 145.677 80.0419 145.677C80.0419 145.677 71.5739 102.564 69.6077 94.5118C69.6077 94.5118 65.5761 141.746 64.5095 142.854C51.0535 148.944 47.3652 145.677 47.3652 145.677C47.3652 145.677 49.7195 77.2736 61.1901 65.1957L79.8168 70.6146C79.8168 70.6146 97.6141 137.943 96.4089 141.081Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask17_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={47}
                                            y={65}
                                            width={50}
                                            height={82}
                                        >
                                            <path
                                                d="M96.4098 141.081C85.8805 149.429 80.0428 145.677 80.0428 145.677C80.0428 145.677 71.5748 102.564 69.6086 94.5119C69.6086 94.5119 65.577 141.746 64.5104 142.854C51.0544 148.944 47.3662 145.677 47.3662 145.677C47.3662 145.677 49.7204 77.2737 61.1911 65.1958L79.8178 70.6147C79.8178 70.6147 97.6151 137.943 96.4098 141.081Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask17_135_2984)">
                                            <path
                                                d="M49.5439 57.7991C58.4661 67.5199 64.1176 74.3668 72.6407 76.6288C81.1638 78.8908 84.6032 87.2207 94.4214 87.9539C104.24 88.687 97.5163 75.6207 97.5163 75.6207L82.7751 67.3813L59.1006 65.2933"
                                                fill="#E5892F"
                                            />
                                            <path
                                                d="M67.4547 84.3562C58.9617 110.096 54.5566 148.678 54.5566 148.678"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M66.3297 83.8446C57.8373 109.584 53.4316 148.167 53.4316 148.167M81.0257 77.8312C82.7953 104.787 93.2092 142.283 93.2092 142.283"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M79.7822 77.7472C81.5547 104.703 91.9692 142.196 91.9692 142.196"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M55.6022 102.716C55.7472 104.729 47.6603 105.152 47.3662 102.716C47.2206 100.702 55.3081 100.279 55.6022 102.716Z"
                                                fill="white"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <path
                                            d="M96.4089 141.081C85.8796 149.429 80.0419 145.677 80.0419 145.677C80.0419 145.677 71.5739 102.564 69.6077 94.5118C69.6077 94.5118 65.5761 141.746 64.5095 142.854C51.0535 148.944 47.3652 145.677 47.3652 145.677C47.3652 145.677 49.7195 77.2736 61.1901 65.1957L79.8168 70.6146C79.8168 70.6146 97.6141 137.943 96.4089 141.081Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M61.6543 68.2118C70.693 76.0139 83.3828 77.2157 83.3828 77.2157C83.3828 77.2157 82.637 72.0073 83.7529 67.9264"
                                            fill="#F3841C"
                                        />
                                        <path
                                            d="M61.6543 68.2118C70.693 76.0139 83.3828 77.2157 83.3828 77.2157C83.3828 77.2157 82.637 72.0073 83.7529 67.9264"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M58.1821 80.6729L57.5 78.4608C62.8227 77.3008 55.6747 65.4618 63.1666 65.5911C60.4058 71.8946 64.54 78.5605 58.1821 80.6729Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask18_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={57}
                                            y={65}
                                            width={7}
                                            height={16}
                                        >
                                            <path
                                                d="M58.1831 80.6729L57.501 78.4608C62.8236 77.3008 55.6757 65.4618 63.1676 65.5911C60.4068 71.8946 64.541 78.5605 58.1831 80.6729Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask18_135_2984)">
                                            <path
                                                d="M58.6088 76.8568L59.694 81.2306L55.9606 81.8732C55.9727 80.3739 54.6445 76.9108 57.4442 77.2332"
                                                fill="white"
                                            />
                                            <path
                                                d="M58.6088 76.8568L59.694 81.2306L55.9606 81.8732C55.9727 80.3739 54.6445 76.9108 57.4442 77.2332"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <path
                                            d="M58.1821 80.6729L57.5 78.4608C62.8227 77.3008 55.6747 65.4618 63.1666 65.5911C60.4058 71.8946 64.54 78.5605 58.1821 80.6729Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M78.1518 39.1669C72.3147 43.0117 62.3178 51.6769 57.9336 67.0556C57.9336 67.0556 78.6918 73.761 84.0829 71.7449C89.474 69.7288 91.4414 52.4889 93.4081 47.9863C95.3749 43.4838 90.0157 36.5168 90.0157 36.5168C79.1309 41.1487 82.4403 36.5168 82.4403 36.5168"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask19_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={57}
                                            y={36}
                                            width={37}
                                            height={37}
                                        >
                                            <path
                                                d="M78.1508 39.1647C72.3137 43.0095 62.3168 51.6747 57.9326 67.0534C57.9326 67.0534 78.6908 73.7588 84.0819 71.7427C89.473 69.7266 91.4404 52.4867 93.4072 47.9841C95.3739 43.4816 90.0147 36.5146 90.0147 36.5146C79.1299 41.1465 82.4394 36.5146 82.4394 36.5146"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask19_135_2984)">
                                            <path
                                                d="M57.9325 59.6145C52.4973 61.0309 69.9113 73.2573 88.9596 68.2095"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M63.6475 52.4535C65.4263 69.9202 77.0849 73.6681 87.8016 54.0224C98.5182 34.3766 69.0096 55.2502 69.0096 55.2502L66.3276 53.6947"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M78.1518 39.1669C72.3147 43.0117 62.3178 51.6769 57.9336 67.0556C57.9336 67.0556 78.6918 73.761 84.0829 71.7449C89.474 69.7288 91.4414 52.4889 93.4081 47.9863C95.3749 43.4838 90.0157 36.5168 90.0157 36.5168C79.1309 41.1487 82.4403 36.5168 82.4403 36.5168"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M65.5073 32.1487C65.8374 32.1574 67.5333 31.4857 67.6029 31.143C68.0547 28.9134 66.0537 20.5527 66.0647 19.4536C66.0734 18.6028 63.1572 19.6062 63.2656 20.4396C63.5881 22.9377 64.2139 32.1133 65.5073 32.1487Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask20_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={63}
                                            y={19}
                                            width={5}
                                            height={14}
                                        >
                                            <path
                                                d="M65.5083 32.1467C65.8383 32.1554 67.5343 31.4838 67.6039 31.141C68.0557 28.9115 66.0547 20.5508 66.0657 19.4517C66.0744 18.6008 63.1582 19.6042 63.2666 20.4377C63.5891 22.9358 64.2149 32.1113 65.5083 32.1467Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask20_135_2984)">
                                            <path
                                                d="M66.1666 32.0387C70.5746 31.9099 66.7756 24.2487 66.8557 20.1487C67.3893 18.7625 63.8397 19.3448 63.9243 20.3331C64.1494 22.9275 64.9185 32.3826 66.1666 32.0387Z"
                                                fill="#E5892F"
                                            />
                                        </g>
                                        <path
                                            d="M65.5073 32.1487C65.8374 32.1574 67.5333 31.4857 67.6029 31.143C68.0547 28.9134 66.0537 20.5527 66.0647 19.4536C66.0734 18.6028 63.1572 19.6062 63.2656 20.4396C63.5881 22.9377 64.2139 32.1133 65.5073 32.1487Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M73.9445 42.1919C74.2606 34.8068 76.8532 22.9748 68.8133 25.5268C68.1699 25.7373 67.5427 25.9942 66.9364 26.2953C66.3976 27.5678 68.6723 26.4739 69.2483 26.7743C72.5827 28.5143 69.9211 34.5632 70.1977 38.111C69.4205 38.3448 73.4492 41.5655 73.9445 42.1919Z"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask21_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={66}
                                            y={25}
                                            width={9}
                                            height={18}
                                        >
                                            <path
                                                d="M73.9445 42.1931C74.2606 34.808 76.8532 22.976 68.8133 25.528C68.1699 25.7385 67.5427 25.9954 66.9364 26.2965C66.3976 27.569 68.6723 26.4751 69.2483 26.7756C72.5827 28.5156 69.9211 34.5644 70.1977 38.1122C69.4205 38.346 73.4492 41.5667 73.9445 42.1931Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask21_135_2984)">
                                            <path
                                                d="M69.8702 32.83C71.0992 35.0218 74.538 34.1425 74.538 34.1425C73.1101 36.843 71.2645 36.2177 69.5332 36.1174"
                                                fill="#EFF1F7"
                                            />
                                        </g>
                                        <path
                                            d="M73.9445 42.1919C74.2606 34.8068 76.8532 22.9748 68.8133 25.5268C68.1699 25.7373 67.5427 25.9942 66.9364 26.2953C66.3976 27.5678 68.6723 26.4739 69.2483 26.7743C72.5827 28.5143 69.9211 34.5632 70.1977 38.111C69.4205 38.3448 73.4492 41.5655 73.9445 42.1919Z"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M84.1958 41.9833C79.4595 44.6212 74.8386 49.2652 74.8386 49.2652V34.0646C74.8386 34.0646 68.7672 35.3139 63.1992 39.6459C62.5125 40.1807 63.651 62.2781 71.4114 64.2576C79.1718 66.2372 97.3032 49.4096 93.1406 42.2316"
                                            fill="white"
                                        />
                                        <mask
                                            id="mask22_135_2984"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x={63}
                                            y={34}
                                            width={31}
                                            height={31}
                                        >
                                            <path
                                                d="M84.1968 41.9832C79.4605 44.621 74.8396 49.2651 74.8396 49.2651V34.0645C74.8396 34.0645 68.7682 35.3138 63.2002 39.6458C62.5135 40.1806 63.652 62.278 71.4124 64.2575C79.1728 66.2371 97.3042 49.4095 93.1415 42.2314"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask22_135_2984)">
                                            <path
                                                d="M63.6328 42.1936C67.2427 37.9596 73.6233 36.1454 75.8876 37.6569L63.6328 42.1936ZM76.4792 63.2905C76.3789 67.8522 65.6941 67.8557 65.4853 63.2905C65.5857 58.7288 76.2699 58.7254 76.4792 63.2905Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M63.6328 42.1936C67.2427 37.9596 73.6233 36.1454 75.8876 37.6569M76.4792 63.2905C76.3789 67.8522 65.6941 67.8557 65.4853 63.2905C65.5857 58.7288 76.2699 58.7254 76.4792 63.2905Z"
                                                stroke="#E5892F"
                                                strokeWidth="0.696"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <path
                                            d="M84.1958 41.9833C79.4595 44.6212 74.8386 49.2652 74.8386 49.2652V34.0646C74.8386 34.0646 68.7672 35.3139 63.1992 39.6459C62.5125 40.1807 63.651 62.2781 71.4114 64.2576C79.1718 66.2372 97.3032 49.4096 93.1406 42.2316"
                                            stroke="#E5892F"
                                            strokeWidth="0.464"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M66.3301 78.171C66.3301 81.4451 69.6077 92.0556 69.6077 92.0556M73.0465 78.4425C72.1968 83.9681 75.6431 87.447 80.0419 86.1507"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M85.0797 44.124C85.5385 45.9591 86.9241 46.7044 88.6815 46.6459C87.0117 47.6319 86.7049 49.1341 87.3058 50.7262C85.8158 49.5012 84.2399 49.6822 82.8543 50.7262C83.6025 48.9821 82.9361 47.5942 81.4785 46.6459C83.4314 46.7926 84.5949 45.7527 85.0797 44.124Z"
                                            fill="white"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M75.1001 49.3797C75.1675 50.6129 74.9042 51.8418 74.3374 52.9392M54.3274 96.2217C54.9868 96.7103 55.808 96.9286 56.6231 96.8318M82.8124 127.02C83.7032 127.169 84.613 127.165 85.5024 127.008M46.4104 150.981C46.7344 151.269 46.9989 151.618 47.1894 152.008C46.449 152.169 45.701 152.294 44.9482 152.38M89.2568 150.136C89.3658 150.424 89.529 150.69 89.7376 150.917L86.9884 151.077M88.5515 35.6192L87.7662 35.8727M70.9978 27.3675L71.2814 27.2997"
                                            stroke="#E5892F"
                                            strokeWidth="0.696"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <Typography className="!font-alibaba text-white pb-2" fontWeight='bold' fontSize={12}>دعوت از دوستان</Typography>
                                <Typography className="!font-peyda text-neutral-400 pb-2 text-center" fontSize={12}>
                                    با دعوت از دوستانتان میتوانید در خرید بعدی طلا خود بدون کارمزد
                                    خرید کنید
                                </Typography>
                                <div className="pb-3 w-full">
                                    <Typography className="!font-peyda text-white pb-2" fontWeight='bold' fontSize={10}>کد دعوت</Typography>
                                    <div className="flex gap-2 relative border border-custom-border-light rounded-xsm">
                                        <input
                                            type="text"
                                            className="form-control flex-1 ps-5 bg-transparent focus:outline-0 text-white font-peyda text-xs"
                                            placeholder="کد دعوت را وارد نمایید"
                                        />
                                        <button className="px-2 py-2.5 font-semibold text-center no-underline align-middle cursor-pointer select-none border border-transparent rounded-lg bg-[#010048] border-[#010048] text-white flex items-center justify-center gap-2 transition-all duration-150 ease-in-out">
                                            <MdOutlineCopyAll fontSize={22} />
                                        </button>
                                    </div>
                                </div>
                                <Typography className="!font-peyda text-white w-full" fontSize={12}>
                                    با استقاده از کد زیر یا به اشتراک گذاری آن با دوستانتان میتوانید
                                    با ثبت نام آن ها تخفیف دریافت کنید
                                </Typography>
                                <div className="social-label"></div>
                                <Typography className="!font-peyda text-neutral-300 w-full" fontWeight='medium' fontSize={14}>اشتراک گذاری :</Typography>
                                <div className="flex gap-3 w-full">
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={25}
                                                viewBox="0 0 24 25"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.9308 17.4751L9.88885 19.4617C9.53484 19.8059 8.94252 19.6536 8.79914 19.1809L7.43848 14.7014"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14.2147 11.5619C14.2147 11.5619 11.6546 13.8719 10.3414 15.0575C9.94884 15.4115 9.98147 16.0345 10.4067 16.3479L15.7247 20.2766C16.2478 20.6633 16.9954 20.3795 17.1309 19.7427L19.7424 7.43444C19.869 6.83915 19.2846 6.34176 18.717 6.56029L3.37496 12.4776C2.92305 12.6516 2.94481 13.2973 3.4066 13.4417L7.43815 14.6995"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M18.7151 6.45597C17.0874 4.82733 14.9228 3.92946 12.6168 3.92847C7.86344 3.92847 3.99604 7.79389 3.99505 12.5453C3.99307 14.0573 4.3896 15.5435 5.14508 16.8537L3.92188 21.3194L8.49235 20.1209C9.75709 20.8091 11.1731 21.1701 12.6129 21.1701H12.6168C17.3683 21.1701 21.2357 17.3037 21.2376 12.5522C21.2386 10.2502 20.3427 8.0856 18.7151 6.45597Z"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M13.6631 14.1696L14.0646 13.7711C14.4334 13.4052 15.0168 13.3587 15.442 13.6574C15.8534 13.9461 16.2252 14.2052 16.5713 14.4465C17.1211 14.8282 17.1874 15.6113 16.7137 16.084L16.3587 16.439"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.76855 8.84748L9.12355 8.49248C9.59622 8.01981 10.3794 8.08606 10.7611 8.63488C11.0014 8.98098 11.2605 9.35278 11.5502 9.76415C11.8488 10.1894 11.8033 10.7728 11.4365 11.1416L11.038 11.5431"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.3591 16.4367C14.8946 17.8943 12.4333 16.6562 10.4902 14.7122"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.4923 14.7161C8.54921 12.772 7.31117 10.3118 8.76873 8.84729"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.0391 11.5421C11.3545 12.0395 11.7589 12.532 12.2158 12.9888L12.2178 12.9908C12.6746 13.4476 13.1671 13.8521 13.6645 14.1675"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={25}
                                                viewBox="0 0 24 25"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.57776 3.72473H16.4814C18.9367 3.72473 20.9273 5.71529 20.9273 8.17061V17.0792C20.9273 19.5335 18.9367 21.5241 16.4814 21.5241H7.5738C5.11849 21.5241 3.12793 19.5335 3.12793 17.0782V8.17456C3.12793 5.71727 5.12047 3.72473 7.57776 3.72473V3.72473Z"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.19071 11.7354V17.0751"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.749 17.0765V13.9616C11.749 12.7325 12.7448 11.7367 13.9739 11.7367V11.7367C15.2031 11.7367 16.1989 12.7325 16.1989 13.9616V17.0765"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M8.18875 8.50936C8.06614 8.50936 7.96626 8.60923 7.96725 8.73185C7.96725 8.85447 8.06712 8.95434 8.18974 8.95434C8.31236 8.95434 8.41223 8.85447 8.41223 8.73185C8.41223 8.60825 8.31236 8.50936 8.18875 8.50936"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={25}
                                                height={25}
                                                viewBox="0 0 25 25"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.01814 3.72473H16.9267C19.381 3.72473 21.3716 5.7143 21.3716 8.17061V17.0792C21.3716 19.5335 19.382 21.5241 16.9257 21.5241H8.01814C5.56282 21.5241 3.57227 19.5345 3.57227 17.0782V8.17061C3.57227 5.71529 5.56183 3.72473 8.01814 3.72473V3.72473Z"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M17.365 7.39702C17.1811 7.39801 17.0318 7.54732 17.0318 7.73125C17.0318 7.91517 17.1821 8.06449 17.366 8.06449C17.5499 8.06449 17.6993 7.91517 17.6993 7.73125C17.7002 7.54633 17.5499 7.39702 17.365 7.39702"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14.9892 10.1078C16.3794 11.4981 16.3794 13.752 14.9892 15.1423C13.599 16.5325 11.345 16.5325 9.95477 15.1423C8.56456 13.752 8.56456 11.4981 9.95477 10.1078C11.345 8.71763 13.599 8.71763 14.9892 10.1078"
                                                    stroke="white"
                                                    strokeWidth="1.48328"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={25}
                                                viewBox="0 0 24 25"
                                                fill="none"
                                            >
                                                <path
                                                    d="M19.7796 10.0056C19.7796 9.59605 19.4475 9.26401 19.0379 9.26401C18.6283 9.26401 18.2963 9.59605 18.2963 10.0056H19.7796ZM3.61746 16.6879C3.37587 16.3572 2.91189 16.2849 2.58112 16.5265C2.25036 16.7681 2.17807 17.232 2.41965 17.5628L3.61746 16.6879ZM2.89255 16.3947C2.48891 16.4643 2.21811 16.848 2.2877 17.2516C2.35729 17.6552 2.74092 17.926 3.14456 17.8564L2.89255 16.3947ZM5.68845 16.2356L5.92409 16.9388C6.16692 16.8575 6.35059 16.6566 6.40992 16.4074C6.46925 16.1583 6.39583 15.8962 6.21573 15.7141L5.68845 16.2356ZM4.79849 5.55603L5.4517 5.20484C5.33045 4.97932 5.10146 4.83229 4.84594 4.81591C4.59042 4.79953 4.34452 4.91611 4.19547 5.1243L4.79849 5.55603ZM10.1383 10.0059L9.96314 10.7265C10.18 10.7792 10.4092 10.7315 10.5869 10.5964C10.7647 10.4614 10.8721 10.2535 10.8795 10.0304L10.1383 10.0059ZM18.148 7.33596L17.5288 7.74413C17.666 7.95231 17.8986 8.0776 18.148 8.0776V7.33596ZM20.8179 7.33596L21.435 7.74735C21.5867 7.51977 21.6008 7.22716 21.4718 6.98601C21.3427 6.74487 21.0914 6.59432 20.8179 6.59432V7.33596ZM18.4209 9.59447C18.1937 9.93528 18.2858 10.3957 18.6266 10.6229C18.9674 10.8501 19.4278 10.7581 19.655 10.4172L18.4209 9.59447ZM19.0379 10.0056H18.2963C18.2963 12.984 17.446 15.4651 15.9232 17.1909C14.4105 18.9052 12.1746 19.9436 9.24832 19.9436V20.6852V21.4269C12.5518 21.4269 15.2107 20.2403 17.0354 18.1723C18.85 16.1158 19.7796 13.257 19.7796 10.0056H19.0379ZM9.24832 20.6852V19.9436C7.61135 19.9436 6.51652 19.5208 5.69299 18.9381C4.84681 18.3393 4.24248 17.5437 3.61746 16.6879L3.01855 17.1254L2.41965 17.5628C3.03762 18.4089 3.76823 19.3932 4.83622 20.1489C5.92686 20.9206 7.32542 21.4269 9.24832 21.4269V20.6852ZM3.01855 17.1256L3.14456 17.8564C3.16806 17.8524 3.18624 17.8481 3.19252 17.8465C3.20108 17.8445 3.208 17.8427 3.21215 17.8415C3.22046 17.8393 3.22722 17.8373 3.23074 17.8363C3.2382 17.8341 3.245 17.832 3.2494 17.8307C3.25886 17.8277 3.26991 17.8242 3.28111 17.8206C3.30408 17.8131 3.33553 17.8028 3.37337 17.7904C3.44943 17.7654 3.55581 17.7301 3.68181 17.6882C3.93402 17.6044 4.2673 17.4931 4.59933 17.3821C4.93145 17.2712 5.26263 17.1603 5.51076 17.0773C5.63483 17.0357 5.73815 17.0011 5.81046 16.9769C5.84661 16.9648 5.87501 16.9553 5.89438 16.9488C5.90406 16.9455 5.91148 16.9431 5.91649 16.9414C5.91899 16.9405 5.92089 16.9399 5.92216 16.9395C5.9228 16.9393 5.92328 16.9391 5.9236 16.939C5.92376 16.9389 5.92388 16.9389 5.92396 16.9389C5.924 16.9389 5.92403 16.9389 5.92405 16.9388C5.92407 16.9388 5.92409 16.9388 5.68845 16.2356C5.45282 15.5324 5.45281 15.5324 5.45279 15.5324C5.45277 15.5324 5.45274 15.5324 5.4527 15.5325C5.45262 15.5325 5.4525 15.5325 5.45234 15.5326C5.45203 15.5327 5.45155 15.5328 5.45092 15.5331C5.44965 15.5335 5.44776 15.5341 5.44526 15.5349C5.44027 15.5366 5.43286 15.5391 5.42319 15.5423C5.40385 15.5488 5.37548 15.5583 5.33935 15.5704C5.26711 15.5946 5.16386 15.6292 5.03987 15.6707C4.79187 15.7537 4.46096 15.8645 4.12918 15.9754C3.79732 16.0863 3.46492 16.1972 3.21384 16.2807C3.08819 16.3225 2.98352 16.3572 2.90965 16.3815C2.87253 16.3937 2.84429 16.4029 2.82542 16.409C2.8157 16.4121 2.81029 16.4139 2.80807 16.4145C2.80664 16.415 2.80879 16.4143 2.81285 16.4131C2.81466 16.4126 2.82003 16.411 2.82725 16.4091C2.83087 16.4081 2.83732 16.4064 2.8455 16.4044C2.85139 16.403 2.86927 16.3987 2.89255 16.3947L3.01855 17.1256ZM5.68845 16.2356L6.21573 15.7141C3.50251 12.9711 3.29955 8.92365 5.40151 5.98776L4.79849 5.55603L4.19547 5.1243C1.68146 8.63572 1.92943 13.4899 5.16118 16.7572L5.68845 16.2356ZM4.79849 5.55603L4.14527 5.90722C5.31219 8.07767 7.50714 10.1296 9.96314 10.7265L10.1383 10.0059L10.3134 9.2852C8.36706 8.81216 6.4741 7.10648 5.4517 5.20484L4.79849 5.55603ZM10.1383 10.0059L10.8795 10.0304C10.9167 8.90705 11.313 7.97839 11.9421 7.33553C12.5672 6.69672 13.4629 6.29767 14.5881 6.29767V5.55603V4.81439C13.0919 4.81439 11.8051 5.35475 10.882 6.2981C9.9628 7.2374 9.44494 8.53366 9.39705 9.98134L10.1383 10.0059ZM14.5881 5.55603V6.29767C15.3848 6.29767 15.9684 6.44887 16.4164 6.68794C16.8627 6.92615 17.2202 7.27599 17.5288 7.74413L18.148 7.33596L18.7672 6.92779C18.3509 6.29633 17.8209 5.7562 17.1147 5.37935C16.4102 5.00335 15.5763 4.81439 14.5881 4.81439V5.55603ZM18.148 7.33596V8.0776H20.8179V7.33596V6.59432H18.148V7.33596ZM20.8179 7.33596L20.2008 6.92458L18.4209 9.59447L19.0379 10.0059L19.655 10.4172L21.435 7.74735L20.8179 7.33596Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="border border-primary-lighter"></div>
                                    <div className="item">
                                        <a href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={26}
                                                height={26}
                                                viewBox="0 0 26 26"
                                                fill="none"
                                            >
                                                <path
                                                    d="M18.4579 13.4349L20.8878 11.005C22.6771 9.21568 22.6771 6.31401 20.8878 4.52364V4.52364C19.0985 2.73431 16.1968 2.73431 14.4064 4.52364L11.9766 6.9535"
                                                    stroke="white"
                                                    strokeWidth="1.56228"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9.54785 15.863L16.0261 9.38477"
                                                    stroke="white"
                                                    strokeWidth="1.56228"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M7.11561 11.8158L4.68575 14.2457C2.89642 16.035 2.89642 18.9367 4.68575 20.727V20.727C6.47508 22.5164 9.37675 22.5164 11.1671 20.727L13.597 18.2972"
                                                    stroke="white"
                                                    strokeWidth="1.56228"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Invite