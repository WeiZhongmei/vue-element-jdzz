<template>
    <!-- 滑块验证 -->
    <div
        :id="id"
        :class="['slider-verify-wrapper', {'show': show}]"
    >
        <div 
            class="slider-verify-container"
        >
            <!-- 图片部分 -->
            <div
                class="slider-verify-body"
                :style="`hieght: ${canvasHeight}px`"
            >
                <!-- #region 图片部分 -->
                <template>
                    <!-- 主图：不完整，有缺口 -->
                    <canvas
                        ref="canvas1"
                        :width="canvasWidth"
                        :height="canvasHeight"
                    />

                    <!-- 小图 -->
                    <canvas
                        ref="canvas2"
                        class="canvas2"
                        :height="canvasHeight"
                        :style="`transform: translateX(${styleWidth - 50 - 20 * (styleWidth - 50) / (canvasHeight - 50)}px)`"
                    />

                    <!-- 主图：完整 -->
                    <canvas
                        ref="canvas3"
                        :class="['canvas3', {'show': isSuccess}]"
                        :width="canvasWidth"
                        :height="canvasHeight"
                    />
                </template>
                <!-- #endregion -->

                <!-- #region 信息提示部分 -->
                <template>
                    <!-- 重置按钮 -->
                    <img src="../../assets/imgs/svg/reset.svg" class="reset">

                    <!-- 加载中 -->                    

                    <!-- 成功/失败提示 -->
                    <div :class="['info', {'show': showInfo, 'fail': showFail}]">
                        {{ showFail ? "验证失败，请重试！" : "验证成功，正在登录！" }}
                    </div>
                </template> 
                <!-- #endregion -->
            </div>

            <!-- 滑块部分 -->
            <div class="slider-container">
                <!-- 滑块滑动的路径 -->
                <div class="slider-range">
                    <!-- 滑块中的提示 -->
                    <div class="slider-tip">
                        向右滑动滑块填充拼图
                    </div>

                    <!-- 滑块 -->
                    <div class="slider">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'slider-verify',
        props: {
            // TODO: 清除id的用处是什么
            id: {
                type: String
            },

            // 在父级中控制是否显示
            show: {
                type: Boolean,
                default: () => false
            },

            canvasWidth: {
                type: Number,
                default: () => 320
            },

            canvasHeight: {
                type: Number,
                default: () => 200
            },
        },

        computed: {
            styleWidth () {
                const width = this.startWidth + this.newX - this.startX;
                return width < 50 ? 50 : width > this.canvasWidth ? this.canvasWidth : width;
            }
        },

        data () {
            return {
                isSuccess: true, // 验证成功
                startWidth: 50, // 鼠标点下时父级的 width
                startX: 0, // 鼠标点下时的偏移X
                newX: 0, // 鼠标当前的偏移X

                showInfo: true,
                showFail: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .slider-verify-wrapper {
        // #region 让自己完全填充屏幕，和屏幕的宽高相同
        position: fixed; // 为 absolute 时，则是和父元素宽高相同
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // #endregion

        background-color: rgba($color: #000000, $alpha: .3);
        z-index: 999;
        // 默认状态，不显示
        opacity: 0;
        pointer-events: none; // 禁用鼠标事件，可以跳过本层到更低层元素触发事件
        translate: opacity 200ms;

        &.show {
            // 显示滑块验证
            opacity: 1;
            pointer-events: auto; // 恢复鼠标事件，可以执行当前元素的事件触发
        }

        .slider-verify-container {
            background-color: #FFF;
            position: absolute;
            // #region 具体要显示在什么位置可以调整，宽高由 canvas + padding + margin + 滑块 撑起
            top: -moz-calc(50% - 40px);
            top: -webkit-calc(50% - 40px);
            top: calc(50% - 40px);
            left: 55%;
            margin-left: 30px;
            padding: 10px;
            // #endregion
 
            user-select: none; // 禁止选中高亮
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

            .slider-verify-body{
                position: relative;
                .canvas2 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    z-index: 2;
                    width: 70px;
                }

                .canvas3 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    transition: opacity 600ms;
                    z-index: 3;

                    &.show {
                        opacity: 1;
                    }
                }

                .reset {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    cursor: pointer;
                    z-index: 10;

                    &:hover {
                        transform: rotate(90deg);
                    }
                }

                .info {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    overflow: hidden;
                    font-size: 13px;
                    background-color: #83ce3f;
                    opacity: 0;
                    color: #FFF;
                    z-index: 10;
                    font-weight: 500;

                    &.show {
                        opacity: .95;
                    }

                    &.fail {
                        background-color: #ce594b;
                    }
                }
            }
        }

        .slider-container {
            .slider-range {
                position: relative;
                width: 100%;
                height: 50px;
                background-color: #eef1f8;
                margin-top: 20px;
                border-radius: 3px;
                box-shadow: 0 0 8px rgba(240, 240, 240, 0.6) inset;

                .slider-tip {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 14px;
                    color: #b7bcd1;
                }
            }
        }
    }
</style>