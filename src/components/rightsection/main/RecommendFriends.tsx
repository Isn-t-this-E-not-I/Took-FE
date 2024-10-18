import styles from "../main/RecommendFriends.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddFriendIcon from "../../../assets/icons";
import { SiBarclays } from "react-icons/si";

const RecommendFriends: React.FC = () => {
  const location = import.meta.env.VITE_APP_API;
  const navigate = useNavigate();
  const [token, setToken] = useState<String | null>();
  const [allUser, setAllUser] = useState<any[]>([]);
  const [follow_, setFollow_] = useState<any[]>([]);
  const [recommend, setRecommend] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false); // showAll 상태 추가

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      const fetchRecommendations = async () => {
        try {
          const response = await axios.get(`${location}/user/all`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setAllUser(response.data);

          const followingList = await axios.get(
            `${location}/follow/following`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setFollow_(followingList.data);
        } catch (error) {
          console.error("Failed to fetch recommendations:", error);
        }
      };

      fetchRecommendations();
    }
  }, [token]);

  useEffect(() => {
    if (allUser.length > 0 && follow_.length > 0) {
      const notFollowingUsers = allUser.filter((user) => {
        return !follow_.some((followedUser) => followedUser.name === user.name);
      });

      setRecommend(notFollowingUsers);
    }
  }, [allUser, follow_]);

  useEffect(() => {
    console.log(allUser);
    console.log(follow_);
    console.log(recommend);
  }, [allUser, recommend]);

  // 팔로우 기능 추가
  const handleFollow = async (nickname: string) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      await axios.put(
        `${location}/follow/add`,
        { nickname },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 팔로우 후 추천 목록에서 해당 유저 제거
      setRecommend((prevRecommendations) =>
        prevRecommendations.filter((user) => user.nickname !== nickname)
      );
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.recommend}>
        {recommend.slice(0, showAll ? recommend.length : 5).map((user) => (
          <div className={styles.bigBox} key={user.nickname}>
            <img
              className={styles.profileImg}
              src={user.profileImageUrl}
              alt="Profile"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://cdn-icons-png.flaticon.com/128/847/847969.png";
              }}
            />
            <div className={styles.profileInfo}>
              <div className={styles.profileNickname}>{user.nickname}</div>
              <div className={styles.profileName}>@{user.name}</div>
            </div>
            <div
              className={styles.AddFriendIcon}
              onClick={() => handleFollow(user.nickname)}
            >
              <AddFriendIcon width={30} height={30} />
            </div>
          </div>
        ))}

        {/* "더보기" 버튼 */}
        {!showAll && (
          <div className={styles.moreBox}>
            <span className={styles.more} onClick={() => setShowAll(true)}>
              more
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendFriends;
